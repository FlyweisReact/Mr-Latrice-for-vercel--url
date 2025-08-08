import React from 'react'
import ShopCard from './ShopCard';
import IndependentDashboardLayout from '../../../components/DashbaordLayout/Independent Dashbaord';

const IndependentAvailabilityManagement = () => {


    return (
        <IndependentDashboardLayout title="Availability Management" >
            <div className=''>
                <ShopCard />
            </div>
        </IndependentDashboardLayout>
    )
}

export default IndependentAvailabilityManagement