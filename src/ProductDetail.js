import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/CartActions";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuBox from "./Navbar/MenuBox";
import ProductsBox from "./Navbar/ProductsBox";
import Navbar from "./Navbar/Navbar";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const { name } = location.state || {};
  const navigate = useNavigate();

  useEffect(() => {
    async function getProductDetails() {
      const res = await fetch(`http://localhost:8000/product/${id}`);
      const data = await res.json();
      setProduct(data);
    }
    getProductDetails();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.code,
        name: name,
        costPrice: costPrice || "₹200",
        sellingPrice: sellingPrice || "₹300",
      })
    );
  };
  const handleBack = () => {
    navigate(-1);
  };

  console.log(product);
  const sellingPrice = "₹300";
  const costPrice = "₹200";

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
      <div
        className="back-btn"
        onClick={() => handleBack()}
        style={{ marginTop: "80px" }}
      >
        <ArrowBackIcon style={{ width: "35px", height: "35px" }} />
      </div>
      <div className="productdet-box">
        <div className="productdet-img">
          <img
            src={product[0]?.imageurl}
            style={{ width: "100%", height: "100%" }}
            alt=""
          />
        </div>
        <div className="productdet-title">{name}</div>
        <div className="productdet-pricebox">
          <div
            className="productdet-price"
            style={{ color: "red", textDecorationLine: "line-through" }}
          >
            {sellingPrice}
          </div>
          <div className="productdet-price" style={{ color: "green" }}>
            {costPrice}
          </div>
        </div>
        <div className="productdet-btnbox">
          <button
            className="view-btn"
            style={{
              fontSize: "15px",
              height: "50px",
            }}
            onClick={() => handleAddToCart(product[0])}
          >
            ADD TO CART
          </button>
        </div>
        <div className="productdet-det">Details</div>
        <div className="productdet-text">{product[0]?.description}</div>
      </div>
    </>
  );
}

export default ProductDetail;
