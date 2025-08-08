import React from 'react';
import socialNetworkImage from '../../assets/images/home/vector.png';

const SocialNetwork = () => {
  return (
    <section className="py-8 md:py-10 px-3 md:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img 
            src={socialNetworkImage} 
            alt="Social Network Illustration" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x500?text=Social+Network+Image';
            }}
          />
        </div>

        {/* Right side - Text content */}
        <div className="w-full md:w-1/2">
          <h2 className="font-glamore text-xl sm:text-2xl md:text-3xl text-charcoal tracking-wide mb-3 md:mb-4">
            A SOCIAL NETWORK THAT CONNECTS EXPERTISE AND CUSTOMERS
          </h2>
          
          <div className="mb-4 md:mb-5">
            <h3 className="font-inter text-base md:text-lg font-semibold text-charcoal mb-1 md:mb-2">
              Our commitment
            </h3>
            <p className="font-inter text-xs sm:text-sm md:text-base text-charcoal leading-relaxed">
              Latrice is a social network of beauty professionals whose mission is 
              to connect people who want to have a beauty service to 
              professionals in the businesses, we found that people needing 
              beauty services have difficulty finding the right professional to their 
              problem, but especially in time. We provide a catalog of beauty 
              professionals in all United States that are waiting for you to make an 
              appointment and make the service within in time.
            </p>
          </div>

          <div className="mb-4 md:mb-5">
            <h3 className="font-inter text-base md:text-lg font-semibold text-charcoal mb-1 md:mb-2">
              The guarantee at the customer's
            </h3>
            <p className="font-inter text-xs sm:text-sm md:text-base text-charcoal leading-relaxed">
              We guarantee transparency and reliable professionals previously 
              selected by us, and a follow-up of the execution of the task at any 
              time the customer can send his remarks or other information that will 
              improve the customer experience with our providers.
            </p>
          </div>

          <div>
            <h3 className="font-inter text-base md:text-lg font-semibold text-charcoal mb-1 md:mb-2">
              The guarantee at the provider's
            </h3>
            <p className="font-inter text-xs sm:text-sm md:text-base text-charcoal leading-relaxed">
              We check the offers that are published that will guarantee your 
              passive or time-based income on our platform. We remain available 
              for any concerns to give more details about the operation of our 
              platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialNetwork;