import React, { useState } from "react";

function Item({ name, category }) {
  // State variable to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle function for adding/removing item from cart
  const handleCartToggle = () => {
    setIsInCart(!isInCart);
  };

  const itemClass = isInCart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
