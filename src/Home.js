import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
            price={799.00}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough hook and Whisk, 5 Litre Glass Bowl"
            price={15999.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Apple iPhone 15 (128 GB) - Blue"
            price={79900.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd Generation) Smart Speaker with Alexa, Charcoal Fabric"
            price={8299.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/618l86R3U9L._SL1000_.jpg"
          />
          <Product
            id="5"
            title="Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={103900.00}
            rating={4}
            image="https://rukminim2.flixcart.com/image/128/128/kokdci80/tablet/o/h/l/mxfa2hn-a-apple-original-imag2znfwhwwzmzz.jpeg?q=70"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={117995.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
