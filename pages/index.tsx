import React, { useEffect, useState } from "react";
import ProductList from "@components/ProductList/ProductList";
import fetch from "isomorphic-unfetch";

const Home = () => {
  const [productsList, setProductsList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then(({ data }: TProductsResponse) => {
        setProductsList(data);
      });
  }, []);

  return <ProductList products={productsList} />;
};

export default Home;
