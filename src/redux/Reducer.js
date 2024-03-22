const initialState = {
  products: JSON.parse(localStorage.getItem("productX")) || [],
  basket: JSON.parse(localStorage.getItem("basketX")) || [],
  dark: false,
  category: ""
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CAT":
      return { ...state, category: action.payload };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "ADD_BASKET":
      let findPro = state.basket.find((el) => el.id === action.payload.id);
      if (findPro) {
        console.log("bar");
      } else {
        let res = [...state.basket, action.payload];
        localStorage.setItem("basketX", JSON.stringify(res));
        return {
          ...state,
          basket: res,
        };
      }
    case "QUANTITY_PLUS":
      let plusBasket = state.basket.find((el) => el.id === action.payload.id);
      if (plusBasket) {
        let plus = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
        localStorage.setItem("basketX", JSON.stringify(plus));
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity + 1 }
              : el
          ),
        };
      }
    case "QUANTITY_MINUS":
      let minusBasket = state.basket.find((el) => el.id === action.payload.id);
      if (minusBasket) {
        let plus = state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
            : el
        );
        localStorage.setItem("basketX", JSON.stringify(plus));
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id
              ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
              : el
          ),
        };
      }
    case "DELETE":
      let del = state.basket.filter((el) => el.id !== action.payload);
      localStorage.setItem("basketX", JSON.stringify(del));
      return {
        ...state,
        basket: del,
      };
    case "DELETE_ALL":
      let delAll = (state.basket = []);
      localStorage.setItem("basketX", JSON.stringify(delAll));
      return {
        ...state,
        basket: delAll,
      };
    default:
      return state;
  }
};
