import S1 from "../../assets/images/signin/s1.png";
import S2 from "../../assets/images/signin/s2.png";
import S3 from "../../assets/images/signin/s3.png";
import S4 from "../../assets/images/signin/s4.png";
import { useEffect, useState } from "react";

import MainLayout from "../MainLayout";

const AuthLayout = ({ children }) => {
  const images = [S1, S2, S3, S4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    // Set up the interval to change images every 3 seconds
    const intervalId = setInterval(() => {
      // Start fade out
      setFadeIn(false);

      // After fade out completes, change the image and start fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 500); // Half a second for fade out
    }, 3000); // 3 seconds interval

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <MainLayout showfooter = {false}>
          {/* Main content */}
          <div className="flex  w-full h-full bg-white gap-12">
            {/* Left side - Image */}
            <div className="hidden lg:flex pt-2 pl-16  w-[811px]">
              <img
                className="object-contain w-full h-full"
                src={images[currentImageIndex]}
                alt={`Slideshow image ${currentImageIndex + 1}`}
              />
            </div>

            {/* Right side - Children content */}
            <div className="w-full">{children}</div>
          </div>
        </MainLayout>
      </div>
    </>
  );
};

export default AuthLayout;
