import React from "react";
import "./List.scss";

// Component
import Card from "../Card/Card";

// Utility
import useFetch from "../../hooks/useFetch";

const List = ({ categoryId, maxPrice, selectedSubcategories }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${selectedSubcategories.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}`
  );

  return (
    <div className="list">
      {error
        ? "Something went wrong!"
        : loading
        ? "Loading..."
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};

export default List;
