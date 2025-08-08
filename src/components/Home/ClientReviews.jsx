import React from 'react';
// Import client images
import client1 from '../../assets/images/home/client-1.png';
import client2 from '../../assets/images/home/client-2.png';
import client3 from '../../assets/images/home/client-3.png';

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'GLEN SPARKLE',
      location: 'MIAMI',
      image: client1,
      text: 'Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.'
    },
    {
      id: 2,
      name: 'MICHAEL RICHARDS',
      location: 'CALIFORNIA',
      image: client2,
      text: 'Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.'
    },
    {
      id: 3,
      name: 'JOHN HOOD',
      location: 'NY',
      image: client3,
      text: 'Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque.'
    }
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h4 className="text-secondary font-inter text-sm md:text-base uppercase tracking-wider mb-2 md:mb-3">
          WHAT PEOPLE SAY ABOUT US
        </h4>
        <h2 className="font-glamore text-2xl md:text-4xl lg:text-5xl text-charcoal tracking-wide">
          CLIENTS REVIEWS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col items-center text-center px-4 py-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden mb-4 md:mb-6 border-2 border-secondary shadow-md">
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/150';
                }}
              />
            </div>
            <p className="font-inter text-charcoal text-xs sm:text-sm md:text-base mb-3 md:mb-4 max-w-xs mx-auto leading-relaxed">
              {review.text}
            </p>
            <div className="mt-auto">
              <h4 className="font-inter text-secondary text-sm sm:text-base md:text-lg font-medium tracking-wide">
                {review.name}, {review.location}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;