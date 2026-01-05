import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const count = useSelector(state =>
    state.cart.items.reduce((s, i) => s + i.quantity, 0)
  );

  return (
    <div className="navbar">
      <div className="nav-left">
        <span className="logo">🌱 Paradise Nursery</span>
        <span className="tagline">Where Green Meets Serenity</span>
      </div>

      <div className="nav-center">
        <Link to="/plants">Plants</Link>
      </div>

      <div className="nav-right">
        <Link to="/cart">
          🛒 <span className="cart-count">{count}</span>
        </Link>
      </div>
    </div>
  );
}
