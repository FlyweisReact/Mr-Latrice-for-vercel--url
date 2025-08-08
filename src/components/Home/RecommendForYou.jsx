import React from 'react';
import { Link } from 'react-router-dom';
import './recommendForYou.css';
import R1 from "../../assets/images/home/h1.png";
import R2 from "../../assets/images/home/h2.png";


// Data for recommended cards
const recommendedItems = [
  {
    id: 1,
    title: 'Best Mustache Styles',
    image: R1,
    link: '/mustache-styles'
  },
  {
    id: 2,
    title: 'Best Short Nail Styles',
    image: 'https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: '/nail-styles'
  },
  {
    id: 3,
    title: 'Best Day Care Spa',
    image: R2,
    link: '/day-care-spa'
  }
];

// Card component for recommended items
const RecommendedCard = ({ item }) => {
  return (
    <Link to={item.link} className="recommended-card">
      <div className="recommended-card-image px-4 py-4">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
      <div className=" my-4">
        <div className='text-white text-center '>{item.title}</div>
      </div>
    </Link>
  );
};

const RecommendForYou = () => {
  return (
    <div className="recommended-for-you-section bg-white py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h2 className="recommended-for-you-heading text-[32px] md:text-[40px] font-rasa text-textBlack mb-8">
          RECOMMENDED FOR YOU
        </h2>
        
        <div className="recommended-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedItems.map(item => (
            <RecommendedCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendForYou;