import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import ProductsBox from "./Navbar/ProductsBox";
import MenuBox from "./Navbar/MenuBox";
import { useLocation } from "react-router-dom";

function Category({ category }) {
  return (
    <>
      <div className="catshort-box">
        <div className="catshort-img">
          <img
            src="https://yekacosmetics.in/wp-content/uploads/2022/06/main-1l-hair.jpg"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "3px solid black",
            }}
            alt=""
          />
        </div>
        <div className="catshort-title">{category.name}</div>
      </div>
    </>
  );
}

function Home() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const { email } = location.state || {};
  var username = email.substring(0, email.indexOf("@"));

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch("http://localhost:8000/categories");
        const data = await res.json();
        setCategories(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
  }, []);

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
      <div className="container" onClick={() => setIsOpen(false)}>
        <div
          className="section-title"
          style={{
            textAlign: "right",
            fontFamily: "cursive",
            fontSize: "18px",
            paddingRight: "15px",
          }}
        >
          Welcome {username}
        </div>
        <div className="section-title">CATEGORIES</div>
        {categories.map((x) => (
          <Link
            to={`/categories/${x.code}`}
            style={{ textDecoration: "none" }}
            key={x.Code}
          >
            <Category category={x} />
          </Link>
        ))}
      </div>
    </>
  );
}
export default Home;
