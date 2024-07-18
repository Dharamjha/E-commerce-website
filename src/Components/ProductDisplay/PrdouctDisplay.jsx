import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import data_product from "../Assets/data";
const PrdouctDisplay = () => {
  const { addToCart } = useContext(ShopContext);
  const { productID } = useParams();
  console.log(productID);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={data_product[productID]?.image} alt="" />
          <img src={data_product[productID]?.image} alt="" />
          <img src={data_product[productID]?.image} alt="" />
          <img src={data_product[productID]?.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={data_product[productID]?.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{data_product[productID]?.name}</h1>
        <div className="productdisplay-right-star">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{data_product[productID]?.name}</h1>
        <div className="productdisplay-right-star"></div>
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>{122}</p>
      </div>
      <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
          ${data_product[productID]?.old_price}
        </div>
        <div className="productdisplay-right-price-new">
          ${data_product[productID]?.new_price}
        </div>
      </div>
      <div className="productdisplay-right-description">
        This hoodie is made from fleece and is generally warmer and more
        comfortable than those made from cotton.
      </div>
      <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
      </div>
      <button
        onClick={() => {
          addToCart(data_product[productID].id);
        }}
      >
        ADD TO CART
      </button>
      <p className="productdisplay-right-category">
        <span>Category :</span>Women , Tshirt, Crop Top
      </p>
      <p className="productdisplay-right-category">
        <span>Tags :</span>Modern, Latest
      </p>
    </div>
  );
};

export default PrdouctDisplay;
