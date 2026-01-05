import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import "../App.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const handleQuantity = (id, qty) => {
    if (qty < 1) return;
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
                <div>
                  <button onClick={() => handleQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total Amount: ₹{totalAmount}</h3>
          <button onClick={() => alert("Checkout Coming Soon!")}>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartItem;
