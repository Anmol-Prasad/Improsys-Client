import { useEffect, useState } from "react";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import Products from "../Products";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../Loading";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProductsBox({ query, isListOpen, setIsListOpen }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/products");
        const data = await res.json();
        setProducts(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getProducts();
  }, []);
  console.log("Products are", products);

  useEffect(() => {
    async function getFilteredProducts() {
      const filtered = products.filter((product) =>
        product.name?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
    getFilteredProducts();
  }, [products, query]);

  return (
    <>
      <div className="productlist-box">
        <div className="section-title" style={{ fontSize: "30px" }}>
          ALL PRODUCTS
        </div>
        <div
          className="back-btn"
          onClick={() => handleBack()}
          style={{ marginRight: "10px", marginTop: "30px" }}
        >
          <ArrowBackIcon style={{ width: "35px", height: "35px" }} />
        </div>
        <div className="home-btn">
          <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
            <HomeSharpIcon style={{ height: "50px", width: "40px" }} />
          </Link>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          filteredProducts.map((x) => (
            <Link
              to={`/product/${x.code}`}
              key={x.code}
              state={{ name: x.name }}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Products items={x} key={x.code} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default ProductsBox;
