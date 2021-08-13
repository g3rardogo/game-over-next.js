import React from "react";
import Navbar from "@components/Navbar/Navbar";
const background = "/background_mobile.png";
const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <div className="background__container">
        <Navbar />
        {children}
      </div>
      <footer className="container"></footer>
      <style jsx>{`
        .background__container {
          background-image: url(${background});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center top;
        }
      `}</style>
    </div>
  );
};

export default Layout;
