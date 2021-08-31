import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";

const GraphicsSection = () => {
  return (
    <section>
      <div className="info__container">
        <div className="navigation">
          <a href="">Graphics / Art</a>
          <a href="">Audio</a>
          <a href="">Writing</a>
          <a href="" className="active">
            All
          </a>
        </div>
        <div className="interaction">
          <div>
            <p>Sort by</p>
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div>
        <article>
          <div className="image__container">
            <img src="/images/graphics.png" alt="3D graphics image" />
          </div>
          <div className="info__container">
            <h2>Sound Comp.</h2>
            <div className="date__container">
              <IoMdCalendar />
              <p>01/12/2021</p>
            </div>
            <div>
              <FaUserCircle />
              <p>Gavin Goulden</p>
            </div>
          </div>
        </article>
        <article>
          <div className="image__container">
            <img src="/images/forms.png" alt="Forms image" />
          </div>
          <div className="info__container">
            <h2>3D Models</h2>
            <div className="date__container">
              <IoMdCalendar />
              <p>01/31/2020</p>
            </div>
            <div>
              <FaUserCircle />
              <p>Gavin Goulden</p>
            </div>
          </div>
        </article>
      </div>
      <style jsx>{`
        section {
          margin-top: 64px;
        }
        .info__container {
          margin-bottom: 24px;
        }

        .info__container .navigation {
          margin-bottom: 16px;
        }

        .info__container .interaction {
          display: flex;
          align-items: center;
        }

        .info__container .interaction div {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          background-color: #68528897;
          border-radius: 24px;
          text-align: center;
          font-size: 14px;
        }

        .info__container .interaction div p {
          margin: 0 8px 0 0;
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
          margin: 0;
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

        article .info__container h2 {
          margin-bottom: 10px;
        }

        article .info__container div {
          color: #f0f0f0;
          display: flex;
          align-items: center;
          width: fit-content;
          font-size: 24px;
        }

        article .info__container div p {
          margin-left: 8px;
          font-size: 14px;
          color: #f0f0f0;
        }

        article .info__container .date__container {
          color: #bbbaba;
          margin-bottom: 24px;
        }
        article .info__container .date__container p {
          color: #bbbaba;
        }

        @media (min-width: 568px) {
          article {
            flex-direction: row;
          }
          .info__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .info__container .navigation {
            margin-bottom: 0;
          }

          article .info__container {
            display: block;
          }

          article .image__container {
            width: 60%;
            margin-right: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default GraphicsSection;
