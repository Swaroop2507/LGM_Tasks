import { products } from "./Inventory";
import ProductInfo from "./ProductInfo";
import { useState } from "react";

const Ecommerce = () => {
  return (
    <div>
      <h3>Welcome to Cummins Ecommerce</h3>

      <div className="allProducts">
        {products.map((prd) => (
          <ProductInfo
            key={prd.id}
            id={prd.id}
            emoji={prd.emoji}
            name={prd.name}
            price={prd.price}
          />
        ))}
      </div>

      <Cart />
    </div>
  );
};

export default Ecommerce;

const Cart = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <div>
      <h3>Shopping cart</h3>
      <div>Total items: {itemsInCart.length}</div>
      <div>Total price: {cartTotal}</div>
    </div>
  );
};
