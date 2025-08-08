import LadyImage from "../assets/images/home/lady.png";
import P1 from "../assets/images/home/p1.png";
import P2 from "../assets/images/home/p2.png";

import BeautySalonNavCSS from "../components/Home/MarqueSlider";
import Discover from "../components/Home/Discover";
import FindServices from "../components/Home/FindServices";
import Browse from "../components/Home/Browse";
import C1 from "../assets/images/home/c11.png";
import C2 from "../assets/images/home/c2.png";
import C3 from "../assets/images/home/c3.png";
import Recommend from "../components/Home/Recommend";
import RecommendForYou from "../components/Home/RecommendForYou";
import ClientReviews from "../components/Home/ClientReviews";
import SocialNetwork from "../components/Home/SocialNetwork";


import img from '../assets/images/dashboard/home.png'

import MainLayout from "../components/MainLayout";

export default function HomePage() {


  return (
    <>
      <MainLayout>
        {/* Main Content */}
        <div className="bg-primary h-full">
          <div className="container mx-auto px-4 mb-8 sm:py-0 py-5">
            <img src={img} alt=""  className="w-full h-auto object-cover"/>
          </div>
          <BeautySalonNavCSS />
          <Discover />
          <FindServices />
        </div>
        <Browse />
        <Recommend />
        <div className="bg-primary h-[900px] md:h-[300px] flex items-center justify-center px-4 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-24">
            <img src={C1} className="object-contain w-full md:w-auto" alt="" />
            <img src={C2} className="object-contain w-full md:w-auto" alt="" />
            <img src={C3} className="object-contain w-full md:w-auto" alt="" />
          </div>
        </div>
        <RecommendForYou />
        <ClientReviews />
        <SocialNetwork />
      </MainLayout>
    </>
  );
}
