import MainLayout from "../../components/MainLayout";

import TopSalonDetails from "./TopSalonDetails";
import RightSalonDetails from "./RightSalonDetails";
import LeftSalonDetails from "./LeftSalonDetails";



export default function SalonServicesDetails() {
   
    return (
        <>
            <MainLayout >
                <div className="max-w-7xl mx-auto p-4 space-y-4">
                    <div className="mb-2">
                        <TopSalonDetails />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 mt-5">
                        <div className="w-full lg:w-[70%]">
                            <LeftSalonDetails />
                        </div>
                        <div className="w-full lg:w-[30%]">
                            <RightSalonDetails />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
