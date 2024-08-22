import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container"> {/* Ensure this matches the CSS selector */}
      <h2>Menu</h2>
      <div className="container">
        <div className="image-text-wrapper">
          <img src="images/p2.avif" alt="Healthy food" />
          <p>
            Eating healthy food is essential for maintaining overall well-being and vitality. 
            A balanced diet, rich in fruits, vegetables, whole grains, lean proteins, and healthy fats, 
            provides the necessary nutrients that the body needs to function optimally. These foods 
            are packed with vitamins, minerals, and antioxidants that support immune function, 
            boost energy levels, and contribute to healthy skin and hair.
          </p>
        </div>
        <div className="image-text-wrapper">
          <img src="images/tea3.jpg" alt="Healthy lifestyle" />
          <p>
            Enjoy the refreshing taste of Qehwa while reaping health benefits like boosted metabolism, improved digestion, and enhanced mental focus. These benefits make Qehwa a popular choice for those seeking both a refreshing beverage and a health booster. Regular consumption of Qehwa may improve blood flow, reduce cholesterol levels, and lower the risk of cardiovascular diseases.
          </p>
        </div>
        <div className="image-text-wrapper">
          <img src="images/t1.jpg" alt="Healthy food" />
          <p>
            Enjoying a slice of cake can elevate your mood and reduce stress due to the release of serotonin, a feel-good hormone. Cakes provide a quick source of carbohydrates, which can help replenish energy levels when needed. Cake is often associated with celebrations and creativity, adding joy and excitement to special occasions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
