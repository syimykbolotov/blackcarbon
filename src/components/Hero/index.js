import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../Products";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch()
  const nav = useNavigate()
  const go = (data) => {
    dispatch({ type: "CAT", payload: data });
    nav("/category");
  };
  return (
    <div id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--categories">
            <button onClick={(e) => go("breakfast")}>Завтрак</button>
            <button onClick={(e) => go("salad")}>Салаты</button>
            <button onClick={(e) => go("cake")}>Десерты</button>
            <button>Завтрак</button>
            <button>Салаты</button>
            <button>Десерты</button>
            <button>Завтрак</button>
            <button>Салаты</button>
            <button>Десерты</button>
          </div>
          <div className="hero--all">
            {products.map((el) => (
              <Products el={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
