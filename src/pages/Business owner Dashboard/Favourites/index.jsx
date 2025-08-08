import React from 'react'
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';
import { IoMdInformationCircle } from "react-icons/io";
import FavCard from './FavCard';


const BusinessFavourites = () => {


    return (
        <BusinessOwnerDashboardLayout title="Favourites"
            gpnumber='2'
            titleAction={
                <div className="flex gap-5">
                    <IoMdInformationCircle color="#2F2F2F" size={30} />
                </div>
            }
        >
            <div className='w-full'>
                <FavCard />
            </div>

        </BusinessOwnerDashboardLayout>
    )
}

export default BusinessFavourites