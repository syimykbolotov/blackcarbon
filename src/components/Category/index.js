import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const { products, category } = useSelector((s) => s);
  const dispatch = useDispatch();
  const addToBasket = (data) => {
    dispatch({ type: "ADD_BASKET", payload: data });
  };
  function getPlus(data) {
    dispatch({ type: "QUANTITY_PLUS", payload: data });
  }
  function getMinus(data) {
    dispatch({ type: "QUANTITY_MINUS", payload: data });
  }
  return (
    <div id="products">
      <div className="container">
        <div className="products flex gap-10">
          {products.map((el) =>
            el.category === category ? (
              <div className="products">
                <div className="products--block">
                  <img src={el.url} alt="img" />
                  <h1>{el.name}</h1>
                  <h6>{el.description}</h6>
                  <h2>{el.price}</h2>
                  <div className="products--block__bas">
                    <div className="products--block__bas--add">
                      <button onClick={() => getMinus(el)}>-</button>
                      <h3>{el.quantity}</h3>
                      <button onClick={() => getPlus(el)}>+</button>
                    </div>
                    <button
                      onClick={() => addToBasket(el)}
                      type="button"
                      className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                    >
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
