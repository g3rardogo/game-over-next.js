import React from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div>
        <input type="text" placeholder="Search..." />
        <FaSearch />
      </div>
      <div>
        <FaBell />
        <FaUserCircle />
      </div>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
        }
        div:first-child {
          display: flex;
          align-items: center;
          padding: 12px;
          background-color: #68528897;
          border-radius: 25px;
        }
        div:nth-child(2) {
          width: 50px;
          display: flex;
          justify-content: space-between;
          font-size: 1.2rem;
        }
        input {
          width: 150px;
          border: none;
          background-color: transparent;
        }
        input::placeholder {
          font-weight: 300;
          color: white;
        }
        input:focus {
          outline: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
