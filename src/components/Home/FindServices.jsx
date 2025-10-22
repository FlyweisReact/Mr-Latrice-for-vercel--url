import React from 'react';
import { Link } from 'react-router-dom';
import { useGetAllCategoriesQuery } from '../../redux/api/categoryApi';

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/salons/New York`} className="block">
      <div className="bg-primary rounded-[25px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full w-full pb-4">
        <div className="overflow-hidden p-6">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-contain rounded-[25px]"
          />
        </div>
        <div className="text-center flex items-center justify-center mb-4 md:mb-0">
          <h3 className="text-white font-rasa text-[24px] font-medium leading-tight">{service.name}</h3>
        </div>
      </div>
    </Link>
  );
};

const FindServices = () => {
  const { data: categories, isLoading, isError, error } = useGetAllCategoriesQuery();

  if (isLoading) {
    return (
      <div className="w-full bg-white py-8">
        <div className="px-4 md:px-20">
          <h2 className="text-[24px] md:text-[40px] text-charcoal font-glamore text-center md:text-left mb-6">
            FIND BY OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center w-full">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse bg-gray-200 rounded-[25px] h-[300px]"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-white py-8">
        <div className="px-4 md:px-20">
          <h2 className="text-[24px] md:text-[40px] text-charcoal font-glamore text-center md:text-left mb-6">
            FIND BY OUR SERVICES
          </h2>
          <div className="text-center text-red-500">
            Error loading services: {error?.data?.message || 'Something went wrong'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white py-8">
      <div className="px-4 md:px-20">
        <h2 className="text-[24px] md:text-[40px] text-charcoal font-glamore text-center md:text-left mb-6">
          FIND BY OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center w-full">
          {categories?.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindServices;