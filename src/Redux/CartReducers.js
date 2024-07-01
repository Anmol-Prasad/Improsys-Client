export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "addtocart":
      const item = action.payload;
      // const exist = state.cartItems.find(
      //   (product) => product.code === item.code
      // );
      // console.log(state.cartItems.find((product) => product));
      // if (exist) {
      //   return { ...state };
      // }
      return { ...state, cartItems: [...state.cartItems, item] };

    case "removefromcart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "productIncrease":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "productDecrease":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        ),
      };
    default:
      return state;
  }
};
