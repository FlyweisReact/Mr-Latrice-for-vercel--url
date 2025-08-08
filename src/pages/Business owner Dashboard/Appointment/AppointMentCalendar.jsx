import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS } from 'date-fns/locale';


const customLocale = {
    ...enUS,
    localize: {
        ...enUS.localize,
        day: (n) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][n],
    },
};


export default function AppointMentCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <>
            <div className="w-full">
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    inline
                    calendarClassName="custom-calendar"
                    locale={customLocale}
                    dayClassName={(date) =>
                        date.toDateString() === selectedDate.toDateString()
                            ? 'selected-day'
                            : 'default-day'
                    }
                />
            </div>
        </>
    );
}