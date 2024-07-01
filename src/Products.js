import React from "react";

// Helper function to extract name before '(' or '-'
function extractName(text) {
  // Find the earliest index of '(' or '-' to truncate at that point
  const parenthesisIndex = text.indexOf("(");
  const dashIndex = text.indexOf("-");

  let truncatedText = text; // Start with the whole text

  if (parenthesisIndex > -1 || dashIndex > -1) {
    // Get the smaller index to truncate before the earliest character
    const splitIndex = Math.min(
      parenthesisIndex === -1 ? Infinity : parenthesisIndex,
      dashIndex === -1 ? Infinity : dashIndex
    );
    truncatedText = text.slice(0, splitIndex).trim(); // Extract before the delimiter
  }

  // If truncated text exceeds maxLength, apply further truncation
  if (truncatedText.length > 36) {
    return truncatedText.slice(0, 33) + "..."; // Leave room for ellipsis
  }

  return truncatedText; // If within the limit, return the text
}

function Products({ items }) {
  return (
    <div className="product-box">
      <div className="product-left">
        <img
          // src="https://cartzilla.createx.studio/img/grocery/single/01.jpg"
          // src="https://rukminim2.flixcart.com/image/850/1000/kcw9w280/ready-meal/z/p/h/550-variety-pack-3-packs-inside-mccain-original-imaftx8fd3jzbfjt.jpeg?q=90&crop=false"
          src="https://i0.wp.com/www.psdly.com/wp-content/uploads/2021/10/Domestika-Creative-Product-Photography-from-Start-to-Finish.jpg"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="product-right">
        <div className="product-title">{extractName(items.name)}</div>
        <div className="product-prices">
          <div
            className="product-price"
            style={{ color: "red", textDecorationLine: "line-through" }}
          >
            ₹300
          </div>
          <div className="product-price" style={{ color: "green" }}>
            ₹200
          </div>
        </div>
        <div className="viewbtn-box">
          <button className="view-btn">VIEW </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
