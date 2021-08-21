import React from "react";
import ProductList from "@components/ProductList/ProductList";
import ProjectsSection from "@components/ProjectsSection/ProjectsSection";
import GraphicsSection from "@components/GraphicsSection/GraphicsSection";
import fetch from "isomorphic-unfetch";

export const getStaticProps = async () => {
  const response = await fetch("https://game-over.vercel.app/api/products");
  const { data: productsList }: TProductsResponse = await response.json();
  return {
    props: {
      productsList,
    },
  };
};

const Home = ({ productsList }: { productsList: TProduct[] }) => {
  return (
    <>
      <ProductList products={productsList} />
      <ProjectsSection />
      <GraphicsSection />
    </>
  );
};

export default Home;
