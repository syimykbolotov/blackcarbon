import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const error = () =>
    toast.error("Заполните пустое поле!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const warn = () => {
    toast.warn("Такой продукт уже существует!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const succes = () => {
    toast.success("Продукт успешно добавлено!!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const { products } = useSelector((s) => s);
  const dispatch = useDispatch();
  const addProducts = () => {
    let pro = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      url,
      name,
      category,
      price,
      description,
      quantity: 1,
    };
    let res = [...products, pro];
    localStorage.setItem("productX", JSON.stringify(res));
    if (
      url.trim() === "" ||
      name.trim() === "" ||
      category.trim() === "" ||
      price.trim() === "" ||
      description.trim() === ""
    ) {
      error();
    } else if (products.find((el) => el.name === name)) {
      warn();
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: pro });
      setUrl("");
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      succes();
    }
  };
  return (
    <div id="addProducts">
      <div className="container">
        <div className="addProducts">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Products URL"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Products Name"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Price"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Category"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
          />
          <button
            onClick={() => addProducts()}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            ADD
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddProducts;
