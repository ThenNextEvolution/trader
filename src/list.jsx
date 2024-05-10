import React from 'react';
import ProductCard from './feed'; // Assuming ProductCard is the card component
import './list.css'; // Import your CSS for styling

// Dummy data array for the products
 export const products = [
  {
    id: 1,
    mainImage: "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
    albumImages: [
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
    ],
    title: "Delicious Apples",
    cod: "45999",
    price: "7.93",
    colors: [
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
    ],
    benefits: [
      "Apples are nutritious",
      "Apples may be good for weight loss",
      "Apples may be good for bone health",
      "They're linked to a lowest risk of diabetes"
    ]
  },
  {
    id: 2,
    mainImage: "https://res.cloudinary.com/john-mantas/image/upload/v1537291846/codepen/delicious-apples/green-apple-with-slice.png",
    albumImages: [
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
    ],
    title: " Apples",
    cod: "45999",
    price: "7.93",
    colors: [
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png",
      "https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
    ],
    benefits: [
      "Apples are nutritious",
      "Apples may be good for weight loss",
      "Apples may be good for bone health",
      "They're linked to a lowest risk of diabetes"
    ]
  },
  // Add more products as needed
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(products => (
        <ProductCard key={products.id} product={products} />
      ))}
    </div>
  );
};

export default ProductList;
