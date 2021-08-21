import React from "react";
import Link from "next/link";

type ProductListProps = {
  products: TProduct[];
};

const mapProductsToCards = (products: TProduct[]) => (
  <>
    <section>
      <h2>Suggested games</h2>
      {products.map(({ name, id, price, image, shortDescription }) => (
        <Link href={`/product/${id}`} key={id}>
          <article>
            <div className="image__container">
              <img src={image} alt={name} />
            </div>
            <div className="info__container">
              <h3>{name}</h3>
              <p>{shortDescription}</p>
              <div>${price}</div>
            </div>
          </article>
        </Link>
      ))}
    </section>
    <style jsx>{`
      section {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
      }
      article {
        display: flex;
        flex-direction: column;
        max-width: 320px;
        margin: 0 auto 32px;
        padding: 18px;
        background-color: #68528897;
        border-radius: 25px;
      }
      img {
        width: 100%;
        height: 360px;
        border-radius: 16px;
      }
      p {
        color: #e2d5d5;
        font-weight: 300;
      }

      .info__container div {
        display: inline-block;
        border-radius: 12px;
        padding: 6px 24px;
        background-color: #ad1e9a;
      }

      @media (min-width: 568px) {
        article {
          max-width: 580px;
          flex-direction: row;
        }

        img {
          width: 160px;
          height: 260px;
        }

        .info__container {
          margin-left: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .info__container div {
          width: fit-content;
        }
      }
    `}</style>
  </>
);

const ProductList = ({ products }: ProductListProps) => (
  <>{mapProductsToCards(products)}</>
);

export default ProductList;
