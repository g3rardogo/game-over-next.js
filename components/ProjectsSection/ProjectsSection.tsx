import React from "react";
import { MdFavorite } from "react-icons/md";
const image = "/images/video.png";

const ProjectsSection = () => {
  return (
    <section>
      <div className="info__container">
        <div className="navigation">
          <a href="">News</a>
          <a href="" className="active">
            Projects
          </a>
        </div>
        <div className="interaction">
          <p>135k+ followers</p>
          <MdFavorite size={36} />
          <div>JOIN AS A MEMBER</div>
        </div>
      </div>
      <article>
        <div className="image__container">
          <img src="/images/video.png" alt="Trailer projects image" />
        </div>
        <div className="info__container">
          <h1>Introduction</h1>
          <p>
            Explore the latest editions of the biggest publication out of
            Marvel's New York and catch up on the events leading up to Marvel's
            Spider-Man: Miles Morales.
          </p>
          <div>ABOUT THE PROJECT</div>
        </div>
      </article>
      <style jsx>{`
        section {
          margin-top: 32px;
        }
        .info__container {
          margin-bottom: 24px;
        }

        .info__container .navigation {
          margin-bottom: 28px;
        }

        .info__container .interaction {
          display: flex;
          align-items: center;
        }

        .info__container .interaction div {
          padding: 6px 24px;
          background-color: #b64286;
          border-radius: 24px;
          text-align: center;
          margin-left: 16px;
          font-size: 14px;
        }

        a {
          color: #bbbaba;
          text-decoration: none;
          margin-right: 18px;
        }

        a.active {
          color: #f0f0f0;
          text-decoration: underline 3px #b64286;
        }

        p {
          margin: 0 8px 0 0;
          line-height: 1.5rem;
          color: #bbbaba;
        }

        article {
          display: flex;
          flex-direction: column;
          margin: 0 auto 32px;
          padding: 18px;
          background-color: #68528897;
          border-radius: 25px;
        }

        article .image__container img {
          width: 100%;
          border-radius: 12px;
        }

        article .info__container div {
          display: inline-block;
          margin-top: 32px;
          padding: 12px 24px;
          border: 1px solid #bbbaba;
          border-radius: 24px;
          font-size: 14px;
        }

        @media (min-width: 568px) {
          .info__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .info__container div {
            width: fit-content;
          }

          .info__container .navigation {
            margin-bottom: 0;
          }

          article .info__container {
            display: block;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
