import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetSalonByIdQuery } from '../../redux/api/salonApi';
import MainLayout from "../../components/MainLayout";
import TopSalonDetails from "./TopSalonDetails";
import RightSalonDetails from "./RightSalonDetails";
import LeftSalonDetails from "./LeftSalonDetails";

export default function SalonServicesDetails() {
  const { id } = useParams();
  const { loginType } = useSelector((state) => state.auth);
  const { data: salon, isLoading, isError, error } = useGetSalonByIdQuery({ userType: loginType, id });

  if (isLoading) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto p-4 space-y-4">
          <div className="animate-pulse">
            <div className="h-40 bg-gray-200 rounded-[20px] mb-2"></div>
            <div className="flex flex-col lg:flex-row gap-4 mt-5">
              <div className="w-full lg:w-[70%]">
                <div className="h-96 bg-gray-200 rounded-[10px]"></div>
              </div>
              <div className="w-full lg:w-[30%]">
                <div className="h-96 bg-gray-200 rounded-[10px]"></div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (isError) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto p-4 space-y-4">
          <div className="text-center text-red-500">
            Error loading salon details: {error?.data?.message || 'Something went wrong'}
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-4 space-y-4">
        <div className="mb-2">
          <TopSalonDetails salon={salon} />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div className="w-full lg:w-[70%]">
            <LeftSalonDetails salon={salon} />
          </div>
          <div className="w-full lg:w-[30%]">
            <RightSalonDetails salon={salon} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}