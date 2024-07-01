import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./Redux/CartActions";
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import MenuBox from "./Navbar/MenuBox";
import ProductsBox from "./Navbar/ProductsBox";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [query, setQuery] = useState("");

  const cartItems = useSelector((state) => state.cartItems);
  console.log("Cart : ", cartItems);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <>
      <Navbar
        isOpen={isOpen}
        isListOpen={isListOpen}
        setIsOpen={setIsOpen}
        setIsListOpen={setIsListOpen}
        query={query}
        setQuery={setQuery}
      />
      {isOpen && <MenuBox />}
      {isListOpen && (
        <ProductsBox
          query={query}
          isListOpen={isListOpen}
          setIsListOpen={setIsListOpen}
        />
      )}
      <div className="mycarttitle">My Cart</div>
      {cartItems.map((products) => (
        <div className="cartitems-box" key={products.code}>
          <div className="cartbox">
            <div className="cartimage">
              <img
                src={products.imageurl}
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                alt=""
              />
              <DeleteIcon
                style={{
                  backgroundColor: "#eb3a34",
                  position: "absolute",
                  left: "7.5px",
                  top: "7.5px",
                  fontSize: "27.5px",
                  borderRadius: "5px",
                  padding: "2px",
                }}
                onClick={() => handleRemoveProduct(products.code)}
              />
            </div>
            <div className="cartcontent">
              <div className="carttitle">{products.name}</div>
              <div className="cartprices">
                <div
                  className="productdet-price"
                  style={{
                    fontSize: "27.5px",
                    color: "red",
                    textDecorationLine: "line-through",
                  }}
                >
                  {products.costPrice}
                </div>
                <div
                  className="productdet-price"
                  style={{ fontSize: "27.5px", color: "green" }}
                >
                  {products.sellingPrice}
                </div>
              </div>
              <div className="cartnumbersbox">
                <button
                  className="cartnobtn"
                  style={{ backgroundColor: "#eb3a34" }}
                  onClick={() => handleDecrease(products.code)}
                >
                  -
                </button>
                <div className="cartnobtn">{products.quantity}</div>
                <button
                  className="cartnobtn"
                  style={{ backgroundColor: "#93dc5c" }}
                  onClick={() => handleIncrease(products.code)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="checkoutbox">
        <Link to="/checkout">
          <button className="checkout-btn">CHECKOUT</button>
        </Link>
      </div>
    </>
  );
}

export default Cart;
