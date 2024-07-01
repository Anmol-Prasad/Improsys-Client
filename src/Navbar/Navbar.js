import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import LocalMallSharpIcon from "@mui/icons-material/LocalMallSharp";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Navbar({
  isOpen,
  isListOpen,
  setIsOpen,
  setIsListOpen,
  query,
  setQuery,
}) {
  const cartItems = useSelector((state) => state.cartItems);
  const cartLength = cartItems?.length;
  console.log(cartItems);

  return (
    <>
      <div className="nav-box">
        <div className="menu-box" onClick={() => setIsOpen(!isOpen)}>
          {isOpen === false ? (
            <MenuSharpIcon
              style={{
                width: "35px",
                height: "35px",
                marginTop: "10px",
                color: "white",
              }}
            />
          ) : (
            <CloseSharpIcon
              style={{
                width: "35px",
                height: "35px",
                marginTop: "10px",
                color: "white",
              }}
            />
          )}
        </div>
        <div className="search-box" onClick={() => setIsListOpen(!isListOpen)}>
          <input
            type="text"
            className="search-text"
            placeholder=" Search products here....."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Link to="/cart">
          <div className="menu-box">
            <Badge
              badgeContent={cartLength}
              color="primary"
              style={{ marginTop: "18px" }}
            >
              <LocalMallSharpIcon
                style={{
                  width: "35px",
                  height: "35px",
                  marginTop: "-5px",
                  color: "white",
                  boxSizing: "border-box",
                }}
              />
            </Badge>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
