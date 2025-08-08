import RightArrow from "../../assets/images/home/right-arrow.png";
import { Link } from "react-router-dom";
export default function Browse() {
  const cities = [
    ["New York City", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio"],
    ["San Diego", "Boston", "Buffalo", "Miami", "Atlanta", "Dallas", "Las Vegas"],
    ["San Francisco", "Seattle", "Jacksonville", "Austin", "Milwaukee", "Little Rock", "Washington, D.C."]
  ];

  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-glamore text-white mb-8">BROWSE YOUR PREFERRED SERVICES BY CITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white font-sansation justify-center w-full">
          {cities.map((column, index) => (
            <div key={index} className="space-y-4">
              {column.map((city, idx) => (
                <Link key={idx} className="flex items-center" to={`/salons/${city}`}>
                 <img src={RightArrow} className="w-5 h-5" />
                  <span className="ml-2">{city}</span>         
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}