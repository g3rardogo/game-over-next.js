import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const ProductItem = () => {
  const router = useRouter();
  const [item, setItem] = useState<TProduct[]>([]);
  const { id } = router.query;
  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      });
  }, []);
  console.log(item);
  return (
    <>
      <section>
        <div className="image__container">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="info__container">
          <h2>{item.name}</h2>
          <div>${item.price}</div>
          <p>{item.description}</p>
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
