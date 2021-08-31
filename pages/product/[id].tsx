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
  const bestGames = await fetch("https://game-over.vercel.app/api/products");
  const { data: productsList }: TProductsResponse = await bestGames.json();
  return {
    props: {
      product,
      productsList,
    },
  };
};
const ProductItem = ({
  product,
  productsList,
}: {
  product: TProduct;
  productsList: TProduct[];
}) => {
  return (
    <>
      <section className="game__section">
        <div className="image__container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="info__container">
          <h2>{product.name}</h2>
          <div>${product.price}</div>
          <p>{product.description}</p>
        </div>
      </section>
      <section className="best-games__section">
        <h2>Best Games</h2>
        <p>Explore our best games</p>
        {productsList.slice(1, 4).map((game) => (
          <article key={game.id}>
            <div className="image__container">
              <img src={game.image} alt={game.name} />
            </div>
            <div className="info__container">
              <h3>{game.name}</h3>
              <div>${game.price}</div>
              <div className="view">VIEW THE GAME</div>
            </div>
          </article>
        ))}
      </section>
      <style jsx>{`
        section {
          max-width: 320px;
          margin: 0 auto 32px;
        }

        @media (min-width: 568px) {
          .game__section {
            display: flex;
            max-width: 1024px;
          }
          .game__section .image__container {
            width: 100%;
          }
        }

        .image__container img {
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
          line-height: 1.5rem;
          font-weight: 300;
          color: #e2d5d5;
        }

        .best-games__section h2 {
          margin: 0;
        }

        .best-games__section p {
          margin: 8px 0 24px 0;
          color: #e2d5d5;
        }

        .best-games__section article {
          margin-bottom: 24px;
        }

        .best-games__section .info__container div {
          display: block;
          width: fit-content;
        }

        .best-games__section .info__container .view {
          background-color: #c746a06c;
          border: 1px solid #b1289f;
        }
      `}</style>
    </>
  );
};

export default ProductItem;
