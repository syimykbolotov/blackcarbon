import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket } = useSelector((s) => s);
  const nav = useNavigate();
  const dispatch = useDispatch();
  function getPlus(data) {
    dispatch({ type: "QUANTITY_PLUS", payload: data });
  }
  function getMinus(data) {
    dispatch({ type: "QUANTITY_MINUS", payload: data });
  }
  const delAll = () => {
    dispatch({ type: "DELETE_ALL", payload: basket });
  };
  const del = (data) => {
    dispatch({ type: "DELETE", payload: data.id });
  };
  const totalPrice = basket.reduce((acc, el) => {
    return (acc += Number(el.price * el.quantity));
  }, 0);
  return (
    <div id="basket">
      <div className="container">
        <div className="basket">
          <div className="basket--block">
            {basket.map((el) => (
              <div className="basket--block__pro">
                <h5 onClick={() => del(el)}>
                  <TiDelete />
                </h5>
                <img src={el.url} alt="img" />
                <h1>{el.name}</h1>
                <div className="basket--block__pro--price">
                  <h2>{el.price * el.quantity} COM</h2>
                  <div className="basket--block__pro--price__right">
                    <button onClick={() => getMinus(el)}>-</button>
                    <h3>{el.quantity}</h3>
                    <button onClick={() => getPlus(el)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="basket--about">
            <input type="text" placeholder="Комментарий к заказу..." />
            <div className="basket--about__in">
              <button style={{ padding: "2px 40px" }}>ok</button>
              <button>Отмена</button>
            </div>
            <div className="basket--about__buy">
              <div className="basket--about__buy--text">
                <h1>Общая сумма</h1>
                <h1>{totalPrice} COM</h1>
              </div>
              <button>Заказать</button>
            </div>
          </div>
          <div className="basket--btns">
            <button onClick={() => nav("/")}>Добавить еще</button>
            <button onClick={() => delAll()}>Очистить корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
