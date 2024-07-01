import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import MenuBox from "./Navbar/MenuBox";
import ProductsBox from "./Navbar/ProductsBox";
import axios from "axios";

const handlePayment = () => {
  var options = {
    key: "rzp_test_vv1FCZvuDRF6lQ",
    key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
    amount: 500 * 100,
    currency: "INR",
    name: "Ecommerce Store",
    description: "for testing purpose",
    handler: function (response) {
      const paymentId = response.razorpay_payment_id;
      alert(paymentId);
    },
    theme: {
      color: "black",
    },
  };

  var pay = new window.Razorpay(options);
  pay.open();
};

function Checkout() {
  const cartItems = useSelector((state) => state.cartItems);

  const totalCostPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.sellingPrice.replace("₹", ""));
    const quantity = parseFloat(item.quantity);
    return total + numericPrice * quantity;
  }, 0);
  const totalSellingPrice = cartItems.reduce((total, item) => {
    const numericPrice = parseFloat(item.costPrice.replace("₹", ""));
    const quantity = parseFloat(item.quantity);
    return total + numericPrice * quantity;
  }, 0);

  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("HEllo");
    try {
      const response = await axios.post("http://localhost:8000/submitorder", {
        ...formData,
        cartItems,
        totalCostPrice,
        totalSellingPrice,
      });
      handlePayment();
      console.log(response);
    } catch (error) {
      console.error("Error submitting order:", error);
      // Handle error in order submission
    }
  };

  // Function to fetch user details
  // const fetchUserDetails = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/user");
  //     setUserDetails(response.data);
  //     console.log(response.data);
  //   } catch (err) {
  //     setError(
  //       err.response ? err.response.data.message : "Error fetching user details"
  //     );
  //   }
  // };

  // // useEffect hook to fetch user details when the component mounts
  // useEffect(() => {
  //   fetchUserDetails();
  // }, []);

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
      <div className="mycarttitle">Checkout</div>
      <div className="coformbox">
        <div className="formtext">
          <input
            type="text"
            name="name"
            className="formipt"
            placeholder="Name"
            style={{ border: "1px solid black" }}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            className="formipt"
            placeholder="Email"
            style={{ border: "1px solid black" }}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            className="formipt"
            placeholder="Address"
            style={{ height: "150px", border: "1px solid black" }}
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNumber"
            className="formipt"
            placeholder="Phone Number"
            style={{ border: "1px solid black" }}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="carttotalbox">
          <div className="carttotaltext" style={{ color: "#eb3a34" }}>
            Total Cost :{" "}
            <span style={{ fontWeight: "bold", color: "#eb3a34" }}>
              {totalCostPrice}
              {/* 1800 */}
            </span>
          </div>
          <div className="carttotaltext" style={{ color: "#93dc5c" }}>
            Total Discount :{" "}
            <span style={{ fontWeight: "bold", color: "#93dc5c" }}>
              {totalCostPrice - totalSellingPrice}
              {/* 600 */}
            </span>
          </div>
          <div className="carttotaltext">
            Final Cost :{" "}
            <span>
              {totalSellingPrice}
              {/* 1200 */}
            </span>
          </div>
        </div>
      </div>
      <div className="checkoutbox">
        <button
          className="checkout-btn"
          style={{ marginTop: "50px" }}
          id="rzp-button1"
          onClick={handleSubmit}
        >
          PAY
        </button>
      </div>
    </>
  );
}

export default Checkout;
