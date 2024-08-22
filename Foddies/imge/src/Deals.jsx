import React from 'react';
import './Deals.css';

const Deals = () => {
  return (
    <div>
      <h1>Deals</h1>
      <div className="deals-container">
        <div className="deal">
          <h3>Burger</h3>
          <p>Rs. 799</p>
          <p>Juicy and flavorful, topped with fresh lettuce, tomato, and cheese.</p>
          <img src="/images/b1a.jpg" alt="Burger" />
        </div>

        <div className="deal">
          <h3>Super Meal</h3>
          <p>From Rs. 310</p>
          <p>Succulent chicken pieces coated in a crispy, flavorful breading.</p>
          <img src="/images/l3.jpg" alt="Super Meal" />
        </div>

        <h2>Azadi Deals & Discounts</h2>

        <div className="deal">
          <h3>Azadi Deal 1</h3>
          <p>Rs. 750</p>
          <p>Warm, buttery garlic bread with a crispy crust and soft interior. Buy one, get one free on large pizza.</p>
          <img src="/images/p1.jpg" alt="Azadi Deal 1" />
        </div>

        <div className="deal">
          <h3>Azadi Deal 2</h3>
          <p><span className="old-price">Rs. 630</span> <span className="new-price">Rs. 580</span></p>
          <p>Serving the best Karahi and stuffed chicken in town.</p>
          <p className="popular">🔥 Popular</p>
          <img src="/images/r1.avif" alt="Azadi Deal 2" />
        </div>
      </div>
    </div>
  );
}

export default Deals;
