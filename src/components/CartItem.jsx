import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, remove } from "../redux/CartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <>
      <Navbar />
      <h3 className="cart-total">Total Cart Amount: ${total}</h3>

      <div className="cart-box">
        {cart.map(i => (
          <div className="cart-item" key={i.id}>
            <img src={i.img} alt={i.name} />
            <div>
              <h4>{i.name}</h4>
              <p>${i.price}</p>
              <div className="qty">
                <button onClick={() => dispatch(dec(i.id))}>-</button>
                {i.quantity}
                <button onClick={() => dispatch(inc(i.id))}>+</button>
              </div>
              <p>Total: ${i.price * i.quantity}</p>
              <button className="delete" onClick={() => dispatch(remove(i.id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <Link to="/plants">
          <button className="green-btn">Continue Shopping</button>
        </Link>
        <button className="green-btn">Checkout</button>
      </div>
    </>
  );
}
