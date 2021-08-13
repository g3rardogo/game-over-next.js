import React, { useEffect, useState } from "react";
import ProductList from "@components/ProductList/ProductList";

const Home = () => {
  const [productsList, setProductsList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/products")
      .then((response) => response.json())
      .then(({ data }: TProductsResponse) => {
        setProductsList(data);
      });
  }, []);

  return <ProductList products={productsList} />;
};

export default Home;
