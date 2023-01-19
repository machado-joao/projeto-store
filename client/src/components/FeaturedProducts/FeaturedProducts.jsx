import React from "react";
import "./FeaturedProducts.scss";

// Component
import Card from "../Card/Card";

// Utility
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint culpa
          nulla animi? Commodi obcaecati repellat molestias, vero incidunt
          temporibus optio autem saepe cumque aspernatur quam vitae, corporis
          eaque illo voluptatum.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "Loading..."
          : data?.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
