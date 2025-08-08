import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import FavCard from './FavCard';
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';


const IndependentFavourites = () => {


    return (
        <IndependentDashboardLayout title="Favourites"
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

        </IndependentDashboardLayout>
    )
}

export default IndependentFavourites