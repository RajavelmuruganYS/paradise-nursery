import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import "../App.css";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Aloe Vera", price: 500, img: "/assets/aloe.jpg" },
      { id: 2, name: "Spider Plant", price: 300, img: "/assets/spider.jpg" },
      { id: 3, name: "Snake Plant", price: 450, img: "/assets/snake.jpg" },
      { id: 4, name: "Peace Lily", price: 600, img: "/assets/peace.jpg" },
      { id: 5, name: "Areca Palm", price: 550, img: "/assets/areca.jpg" },
      { id: 6, name: "Rubber Plant", price: 400, img: "/assets/rubber.jpg" }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: 7, name: "Rose", price: 200, img: "/assets/rose.jpg" },
      { id: 8, name: "Tulip", price: 250, img: "/assets/tulip.jpg" },
      { id: 9, name: "Jasmine", price: 220, img: "/assets/jasmine.jpg" },
      { id: 10, name: "Hibiscus", price: 300, img: "/assets/hibiscus.jpg" },
      { id: 11, name: "Marigold", price: 180, img: "/assets/marigold.jpg" },
      { id: 12, name: "Orchid", price: 500, img: "/assets/orchid.jpg" }
    ]
  },
  {
    name: "Succulents",
    plants: [
      { id: 13, name: "Echeveria", price: 350, img: "/assets/echeveria.jpg" },
      { id: 14, name: "Sedum", price: 300, img: "/assets/sedum.jpg" },
      { id: 15, name: "Crassula", price: 400, img: "/assets/crassula.jpg" },
      { id: 16, name: "Haworthia", price: 320, img: "/assets/haworthia.jpg" },
      { id: 17, name: "Lithops", price: 250, img: "/assets/lithops.jpg" },
      { id: 18, name: "Kalanchoe", price: 280, img: "/assets/kalanchoe.jpg" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="product-list">
      {plantCategories.map(category => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <div className="plants-container">
            {category.plants.map(plant => {
              const inCart = cartItems.find(item => item.id === plant.id);
              return (
                <div key={plant.id} className="plant-card">
                  <img src={plant.img} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>
                  <button
                    disabled={!!inCart}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {inCart ? "Added" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
