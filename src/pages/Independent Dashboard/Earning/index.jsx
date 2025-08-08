import { useState } from "react";
import { GoCalendar } from "react-icons/go";

import Analytics from "./Analytics";
import EarningTable from "./EarningTable";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // base
import 'react-date-range/dist/theme/default.css'; // theme
import IndependentDashboardLayout from "../../../components/DashbaordLayout/Independent Dashbaord";


export default function IndependentEarning() {
    const [activeTab, setActiveTab] = useState('Earning');

    const [range, setRange] = useState([
        {
            startDate: new Date(2025, 0, 1),
            endDate: new Date(2025, 11, 31),
            key: 'selection',
        },
    ]);
    const [open, setOpen] = useState(false);

    const formattedRange = `${format(range[0].startDate, 'MMM dd, yyyy')} - ${format(range[0].endDate, 'MMM dd, yyyy')}`;


    return (
        <IndependentDashboardLayout
            titleAction={
                <div className="flex items-center gap-2 mb-2">
                    <div
                        className={`px-2.5 py-2.5 sm:text-[40px] text-2xl font-[600] font-rasa whitespace-nowrap rounded-tl-[6px] rounded-bl-[6px] flex items-center justify-center  cursor-pointer  ${activeTab === 'Earning' ? 'bg-[#123E41] text-[#FAF9F6]' : ' text-charcoal '
                            }`}
                        onClick={() => setActiveTab('Earning')}
                    >

                        Earning
                    </div>
                    <div
                        className={`px-2.5 py-2.5 sm:text-[40px] text-2xl font-[600] font-rasa whitespace-nowrap  rounded-tr-[6px] rounded-br-[6px] flex items-center justify-center cursor-pointer  ${activeTab === 'Analytics' ? 'bg-[#123E41] text-[#FAF9F6]' : 'text-charcoal '
                            }`}
                        onClick={() => setActiveTab('Analytics')}
                    >

                        Analytics
                    </div>
                </div>
            }
            headerAction={
                <div className="flex items-center  flex-wrap gap-3">
                    <div className="py-0.5 px-3.5 bg-white border border-[#00000066]  shadow-2xl rounded-[17px] flex items-center justify-center">
                        <p className=" font-[600] font-rasa sm:tex-[18px] text-[#123E41] m-0">Total Earning: $100,055,50.00</p>
                    </div>
                    <div className="relative">
                        <div
                            onClick={() => setOpen(!open)}
                            className="py-0.5 px-3.5 bg-white border border-[#00000066]  shadow-2xl rounded-[17px] flex items-center justify-center"
                        >
                            <p className=" font-[600] font-rasa sm:tex-[18px] text-[#123E41] m-0 flex items-center gap-2 cursor-pointer">
                                {formattedRange}
                                <GoCalendar color="#123E41" size={15} />
                            </p>
                        </div>
                        {open && (
                            <div className="absolute z-50 mt-2">
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={range}
                                     className="custom-date-range"
                                    rangeColors={['#123E41']}
                                />
                            </div>
                        )}
                    </div>


                    <select name="" id="" className='py-1 px-3.5 bg-white shadow-[0px_0px_4px_0px_#00000040] rounded-[17px] font-[700] font-rasa  text-charcoal outline-none'>
                        <option value="">Daily</option>
                        <option value="">Monthly</option>
                        <option value="">Weekly</option>
                        <option value="">Yearly</option>
                    </select>
                </div>
            }
        >

            {activeTab === 'Earning' ?
                <EarningTable />
                :
                <Analytics />
            }

        </IndependentDashboardLayout >
    );
}