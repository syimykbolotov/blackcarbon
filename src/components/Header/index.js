import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(false);
  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1 onClick={() => nav("/")}>Ethiopia</h1>
          <div className="header--nav">
            <input type="text" placeholder="Я ищу" />
            <button className="header--nav__search">
              <IoSearchOutline style={{ fontSize: "24px" }} />
            </button>
            <button>
              <IoIosAddCircle
                onClick={() => nav("/addProducts")}
                style={{ color: "white", fontSize: "34px" }}
              />
            </button>
            <div className="header--nav__darkmode">
              <div className="header--nav__darkmode--white">
                <MdSunny onClick={() => setDark(true)} />
              </div>
              <div className="header--nav__darkmode--black">
                <BsMoonStarsFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
