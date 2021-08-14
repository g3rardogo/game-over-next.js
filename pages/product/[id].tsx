import React from "react";
import fetch from "isomorphic-unfetch";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
  const response = await fetch("https://game-over.vercel.app/api/products");
  const { data: productsList }: TProductsResponse = await response.json();

  const paths = productsList.map((product) => ({
    params: {
      id: product.id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const id = params?.id as string;
  const response = await fetch(
    `https://game-over.vercel.app/api/products/${id}`
  );
  const product: TProduct = await response.json();
  return {
    props: {
      product,
    },
  };
};
const ProductItem = ({ product }: { product: TProduct }) => {
  return (
    <>
      <section>
        <div className="image__container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="info__container">
          <h2>{product.name}</h2>
          <div>${product.price}</div>
          <p>{product.description}</p>
        </div>
      </section>
      <style jsx>{`
        section {
          max-width: 320px;
          margin: 0 auto 32px;
        }
        @media (min-width: 568px) {
          section {
            display: flex;
            max-width: 1024px;
          }
          .image__container {
            width: 100%;
          }
        }
        img {
          width: 100%;
          border-top-left-radius: 25px;
          border-top-right-radius: 25px;
        }

        .info__container {
          padding: 18px;
          background-color: #68528897;
          border-bottom-left-radius: 25px;
          border-bottom-right-radius: 25px;
        }

        .info__container h2 {
          margin: 0;
        }

        .info__container div {
          display: inline-block;
          border-radius: 12px;
          padding: 6px 24px;
          margin-top: 18px;
          background-color: #ad1e9a;
        }

        .info__container p {
          color: #e2d5d5;
          font-weight: 300;
        }
      `}</style>
    </>
  );
};

export default ProductItem;
