import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  { id: 1, name: "Snake Plant", price: 15, category: "Air Purifying", img: "URL_HERE" },
  { id: 2, name: "Spider Plant", price: 12, category: "Air Purifying", img: "URL_HERE" },
  { id: 3, name: "Peace Lily", price: 18, category: "Air Purifying", img: "URL_HERE" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  return (
    <>
      <Navbar />
      <h2 className="section-title">Air Purifying Plants</h2>

      <div className="plant-grid">
        {plants.map(p => (
          <div className="plant-card" key={p.id}>
            <span className="sale">SALE</span>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p className="price">${p.price}</p>

            <button
              className="green-btn"
              disabled={cart.some(i => i.id === p.id)}
              onClick={() => dispatch(addToCart(p))}
            >
              {cart.some(i => i.id === p.id) ? "Added to Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
