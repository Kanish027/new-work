import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav-container flex justify-center ${
        isScrolled ? "nav-shadow" : ""
      }`}
    >
      <nav className="nav flex md:h-20 h-28 md:mx-0 mx-5 justify-between w-full items-start md:items-center">
        <div className="flex md:flex-row flex-col md:items-center items-start">
          <div>
            <img src="logo.webp" width={"150px"} height={"100px"} alt="" />
          </div>
          <ul className="flex items-center gap-5">
            <Link to={"/"}>
              <li
                className={
                  location.pathname === "/"
                    ? "text-md border-b-2 h-7 border-b-blue-700 p-0.5 font-semibold text-blue-700"
                    : "text-md  p-0.5 h-7 font-semibold"
                }
              >
                Overview
              </li>
            </Link>
            <Link to={"/features"}>
              <li
                className={
                  location.pathname === "/features"
                    ? "text-md border-b-2 h-7 border-b-blue-700 p-0.5 font-semibold text-blue-700"
                    : "text-md p-0.5 h-7 font-semibold"
                }
              >
                Features
              </li>
            </Link>
            <Link to={"/compare"}>
              <li
                className={
                  location.pathname === "/compare"
                    ? "text-md border-b-2 h-7 border-b-blue-700 p-0.5 font-semibold text-blue-700"
                    : "text-md p-0.5 h-7 font-semibold"
                }
              >
                Compare
              </li>
            </Link>
          </ul>
        </div>
        <div className="button-container hidden lg:block">
          <button
            className="bg-blue-700 py-3 px-14 font-semibold text-white text-xl nav-button"
            style={{ borderRadius: "4px" }}
          >
            Find Retailers
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
