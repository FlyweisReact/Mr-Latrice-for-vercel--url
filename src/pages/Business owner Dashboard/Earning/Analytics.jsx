import { useState } from "react";

import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';

const data1 = [
    { month: 'JAN', value: 40000 },
    { month: 'FEB', value: 35000 },
    { month: 'MAR', value: 50000 },
    { month: 'APR', value: 80000 },
    { month: 'MAY', value: 70000 },
    { month: 'JUN', value: 30000 },
    { month: 'JUL', value: 90000 },
    { month: 'AUG', value: 40000 },
    { month: 'SEP', value: 30000 },
    { month: 'OCT', value: 10000 },
    { month: 'NOV', value: 70000 },
    { month: 'DEC', value: 95000 },
];


export default function Analytics() {

    return (
        < >
            <div className="space-y-4">
                <div className="w-full bg-[#123E41] rounded-[20px] p-5">
                    <h2 className="font-[700] font-rasa sm:text-[30px] text-[25px] text-[#FFFFFF] mb-2">Earning Analytics Report.</h2>
                    <div className="earning-chart-wrapper">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={data1}>
                                <XAxis dataKey="month" stroke="#ffffff" />
                                <YAxis stroke="#FAF9F6" tickFormatter={(value) => `${value / 1000}k`} />
                                <Tooltip contentStyle={{ backgroundColor: '#0D494C', border: 'none', color: '#fff' }} />
                                <Bar dataKey="value" fill="#FAF9F6" barSize={20}  />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="w-full bg-[#123E41] rounded-[20px] p-5">
                    <h3 className="font-[700] font-rasa sm:text-[30px] text-[25px] text-[#FFFFFF] mb-3">Breakdown</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-1">
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">
                                From Services
                            </span>



                            {/* Dashed line */}
                            <div className="flex-grow border-t-2 border-dashed border-[#FAF9F6] mx-2"></div>

                            {/* Rating Score */}
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">$100,000,00.00</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">
                                Promotions
                            </span>
                            <div className="flex-grow border-t-2 border-dashed border-[#FAF9F6] mx-2"></div>
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">$50,00.00</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">
                                Tip
                            </span>
                            <div className="flex-grow border-t-2 border-dashed border-[#FAF9F6] mx-2"></div>
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">$5,50.00</span>
                        </div>
                        <div className="flex-grow border-t-1 border border-[#FAF9F6] mx-2"></div>
                        <div className="flex items-center gap-1 mt-2">
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">
                                Total earning
                            </span>
                            <div className="flex-grow border-t-2 border-dashed border-[#FAF9F6] mx-2"></div>
                            <span className="font-[700] font-rasa sm:text-[25px] text-[20px] text-[#FFFFFF]">$100,055,50.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}