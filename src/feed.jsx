import React from 'react';
import './feed.css'; // Assuming your CSS is in a file called feed.css
import { products } from './list';

// // Dummy data array for the products
// const products = [
//   {
//     id: 1,
//     mainImage: "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
//     albumImages: [
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
//     ],
//     title: "Delicious Apples",
//     cod: "45999",
//     price: "7.93",
//     colors: [
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
//     ],
//     benefits: [
//       "Apples are nutritious",
//       "Apples may be good for weight loss",
//       "Apples may be good for bone health",
//       "They're linked to a lowest risk of diabetes"
//     ]
//   },
//   {
//     id: 1,
//     mainImage: "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
//     albumImages: [
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
//     ],
//     title: "DeApples",
//     cod: "45999",
//     price: "7.93",
//     colors: [
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
//       "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
//     ],
//     benefits: [
//       "Apples are nutritious",
//       "Apples may be good for weight loss",
//       "Apples may be good for bone health",
//       "They're linked to a lowest risk of diabetes"
//     ]
//   },
  
  
//   // Add more products as needed
// ];

export default function ProductCard() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id} className="product">
          <div className="product__photo">
            <div className="photo-container">
              <div className="photo-main">
                <div className="controls">
                  <i className="material-icons">share</i>
                  <i className="material-icons">favorite_border</i>
                </div>
                <img
                  src={product.mainImage}
                  alt="main product"
                />
              </div>
              <div className="photo-album">
                <ul>
                  {product.albumImages.map((image, index) => (
                    <li key={index}>
                      <img
                        src={image}
                        alt={`product view ${index + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="product__info">
            <div className="title">
              <h1>{product.title}</h1>
              <span>COD: {product.cod}</span>
            </div>
            <div className="price">
              R$ <span>{product.price}</span>
            </div>
            <div className="description">
              <h3>BENEFITS</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <button className="buy--btn">Message</button>
          </div>
        </li>
      ))}
    </ul>
  );
};
