import { getCartItems, addToCart, removeFromCart } from "./CartStatus";
import { getProductById } from "./Inventory";

const ProductInfo = (props) => {
  const addItems = () => {
    let item = getProductById(props.id);
    addToCart(item);
  };

  const removeItems = () => {
    let item = getProductById(props.id);
    removeFromCart(item);
  };

  return (
    <div>
      <span role="img" aria-label="product" className="productImage">
        {props.emoji}
      </span>
      <p>Product name: {props.name}</p>
      <p>Product price: {props.price}</p>
      <button onClick={addItems}>Add</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={removeItems}>Remove</button>
    </div>
  );
};

export default ProductInfo;
