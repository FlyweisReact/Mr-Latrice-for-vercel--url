import React from 'react'
import BusinessOwnerDashboardLayout from '../../../components/DashbaordLayout/Business Owner';
import ShopCard from './ShopCard';

const AvailabilityManagement = () => {


    return (
        <BusinessOwnerDashboardLayout title="Availability Management" >
            <div className=''>
                <ShopCard />
            </div>
        </BusinessOwnerDashboardLayout>
    )
}

export default AvailabilityManagement