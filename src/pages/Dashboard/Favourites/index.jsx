import React from 'react'

import ClientDashboardLayout from '../../../components/DashbaordLayout/Client Dashbaord';
import FavouritesCard from './FavouritesCard';
import { IoMdInformationCircle } from "react-icons/io";


const Favourites = () => {


    return (
        <ClientDashboardLayout
            title="Favourites"
            gpnumber='2'
            titleAction={
                <div className="flex gap-5">
                    <IoMdInformationCircle color="#2F2F2F" size={30} />
                </div>
            }
        >
            <div className='w-full'>
                <FavouritesCard />
            </div>

        </ClientDashboardLayout>
    )
}

export default Favourites