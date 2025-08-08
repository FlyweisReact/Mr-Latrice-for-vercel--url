import { useParams } from "react-router-dom";
import MainLayout from "../../components/MainLayout";


import SalonMapLocation from "./SalonMapLocation";
import SalonsListByCity from "./SalonsListByCity";


export default function CitybySalonsList() {

    const { city } = useParams();



    return (
        <>
            <MainLayout showfooter={false} showfilters = {true}>
                <div className="h-[100vh]  p-4 space-y-4 flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-[55%]">
                        <SalonMapLocation />
                    </div>
                    <div className="w-full flex-1">
                        <SalonsListByCity city={city} />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
