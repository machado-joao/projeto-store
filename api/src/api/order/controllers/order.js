('use strict');
const stripe = require('stripe')(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async create(context) {
    const { products } = context.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service('api::product.product')
            .findOne(product.id);

          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ['BR'] },
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: process.env.CLIENT_URL + '?success=true',
        cancel_url: process.env.CLIENT_URL + '?success=false',
        line_items: lineItems,
      });

      await strapi
        .service('api::order.order')
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      context.response.status = 500;
      return { error };
    }
  },
}));
