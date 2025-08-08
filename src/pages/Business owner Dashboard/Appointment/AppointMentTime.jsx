import { useState } from 'react';

export default function AppointmentTime() {
    const [selectedHour, setSelectedHour] = useState(21);
    const [selectedMinute, setSelectedMinute] = useState(0);
    const [activeTab, setActiveTab] = useState('hours');

    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

    const handleHourSelect = (hour) => {
        setSelectedHour(hour);
    };

    const handleMinuteSelect = (minute) => {
        setSelectedMinute(minute);
    };

    // Example: index (0-23), total (24), radius (in %)
    const getPosition = (index, total, radius) => {
        const angle = (360 / total) * index - 90;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
        return { x, y };
    };


    const renderHours = () => {
        const innerHours = Array.from({ length: 12 }, (_, i) => i);        // 00–11
        const outerHours = Array.from({ length: 12 }, (_, i) => i + 12);   // 12–23



        return (
            <>
                {/* Inner 12-hour format */}
                {innerHours.map((hour, i) => {
                    const { x, y } = getPosition(i, 12, 30);
                    return (
                        <div
                            key={`inner-${hour}`}
                            className={`number-mark ${selectedHour === hour ? 'selected' : ''}`}
                            style={{ left: `${x}%`, top: `${y}%` }}
                            onClick={() => handleHourSelect(hour)}
                        >
                            {String(hour).padStart(2, '0')}
                        </div>
                    );
                })}

                {/* Outer 24-hour format */}
                {outerHours.map((hour, i) => {
                    const { x, y } = getPosition(i, 12, 45);
                    return (
                        <div
                            key={`outer-${hour}`}
                            className={`number-mark ${selectedHour === hour ? 'selected' : ''}`}
                            style={{ left: `${x}%`, top: `${y}%` }}
                            onClick={() => handleHourSelect(hour)}
                        >
                            {String(hour).padStart(2, '0')}
                        </div>
                    );
                })}
            </>
        );
    };





    return (
        <div className="time-picker-wrapper">
            <div className="timepicker-container">
                <div className='timepicker-header'>
                    <div className="tabs">
                        <div
                            className={`tab ${activeTab === 'hours' ? 'active' : ''}`}
                            onClick={() => setActiveTab('hours')}
                        >
                            Hours
                        </div>
                        <div
                            className={`tab ${activeTab === 'minutes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('minutes')}
                        >
                            Minutes
                        </div>
                    </div>
                    <div className="display-time">
                        <span
                            className={`selected-hour ${activeTab === 'hours' ? 'active-tab' : ''}`}
                        >
                            {String(selectedHour).padStart(2, '0')}
                        </span>
                        :
                        <span
                            className={`selected-minute ${activeTab === 'minutes' ? 'active-tab' : ''}`}
                        >
                            {String(selectedMinute).padStart(2, '0')}
                        </span>
                    </div>
                </div>


                <div className="clock-face">
                    {activeTab === 'hours' ? (
                        renderHours()
                    ) : (
                        <>
                            {minutes.map((minute, index) => {
                                const { x, y } = getPosition(index, 12, 40);

                                return (
                                    <div
                                        key={minute}
                                        className={`number-mark ${selectedMinute === minute ? 'selected' : ''}`}
                                        style={{
                                            left: `${x}%`,
                                            top: `${y}%`,
                                        }}
                                        onClick={() => handleMinuteSelect(minute)}
                                    >
                                        {String(minute).padStart(2, '0')}
                                    </div>
                                );
                            })}
                        </>
                    )}

                    <div className="center-dot" />
                    <div
                        className="hand"
                        style={{
                            transform: `rotate(${(activeTab === 'hours'
                                ? (360 / 12) * (selectedHour % 12) + (360 / 12) * (selectedMinute / 60)
                                : (360 / 12) * (selectedMinute / 5)) - 183}deg)`,
                            height:
                                activeTab === 'minutes'
                                    ? '40%'
                                    : selectedHour < 12
                                        ? '30%'
                                        : '40%'

                        }}
                    />
                </div>
            </div>
        </div>
    );
}