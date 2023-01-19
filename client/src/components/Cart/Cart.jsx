import React from "react";
import "./Cart.scss";

// Icon
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";

// Utilities
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MRl16AX5BgfDaGlq4HXkubjovOvxGK5D1LezTstiY20kCLsfhWetqthHj3YAVSqHEFquknwRQU471CJcH2J6H9W00IR8OCFBH"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const response = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div key={item.id} className="item">
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.mainImg}
            alt="Product pic."
          />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 25)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
