export const addToCart = (product) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:8000/product/${product.id}`);
    const data = await res.json();
    const bigData = {
      ...data[0],
      id: product.id,
      name: product.name,
      costPrice: product.costPrice,
      sellingPrice: product.sellingPrice,
      quantity: 1,
    };
    dispatch({ type: "addtocart", payload: bigData });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: "removefromcart", payload: id });
};

export const increaseQuantity = (id) => async (dispatch) => {
  dispatch({ type: "productIncrease", payload: id });
};

export const decreaseQuantity = (id) => async (dispatch) => {
  dispatch({ type: "productIncrease", payload: id });
};
