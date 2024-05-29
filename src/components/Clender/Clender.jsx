'use client'
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Clender = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className="p-6 lg:p-20">
            <div className="mx-auto lg:flex justify-center items-center gap-10  ">
                <div className="clender-hero text-white">
                    <h2 className="uppercase text-3xl font-bold"> Schedule every meeting faster</h2>
                    <p className="text-xl my-6">If you want to success follow shedule in life</p>
                    <button className="btn uppercase"> Follow Shedule</button>
                </div>
                <Calendar className={'mt-10 md:mt-0'} onChange={onChange} value={value} />
            </div>
        </div>
    );
};

export default Clender;