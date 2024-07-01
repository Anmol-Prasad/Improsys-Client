import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ProductsBox from "./Navbar/ProductsBox";
import MenuBox from "./Navbar/MenuBox";
import Products from "./Products";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// function Categories({ items }) {
//   return (
//     <>
//       <div className="catshort-box">
//         <div className="catshort-img"></div>
//         <div className="catshort-title">{items.name}</div>
//       </div>
//     </>
//   );
// }

const CategoryDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      const res = await fetch(`http://localhost:8000/categories/${id}`);
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, [id]);

  // useEffect(() => {
  //   async function getProductDetails() {
  //     const fetchedProducts = await Promise.all(
  //       productCode.map(async (productID) => {
  //         const res = await fetch(`http://localhost:8000/product/${productID}`);
  //         return await res.json();
  //       })
  //     );
  //     setProductDetails(fetchedProducts);
  //   }
  //   if (products.length > 0) {
  //     getProductDetails();
  //   }
  // }, [productCode, products.length]);

  const handleBack = () => {
    navigate(-1);
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
      <div className="products-container">
        <div className="back-btn" onClick={() => handleBack()}>
          <ArrowBackIcon style={{ width: "35px", height: "35px" }} />
        </div>
        {products.map((items) => (
          <Link
            to={`/product/${items.code}`}
            key={items.code}
            state={{ name: items.name }}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Products items={items} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryDetail;
