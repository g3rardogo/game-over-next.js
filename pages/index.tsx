import React, { useEffect, useState } from "react";
import ProductList from "@components/ProductList/ProductList";
import fetch from "isomorphic-unfetch";

export const getServerSideProps = async () => {
  const response = await fetch("https://game-over.vercel.app/api/products");
  const { data: productsList }: TProductsResponse = await response.json();
  return {
    props: {
      productsList,
    },
  };
};

const Home = ({ productsList }: { productsList: TProduct[] }) => {
  return <ProductList products={productsList} />;
};

export default Home;
