'use client'

import { useEffect, useState } from "react";
import CommonSlide from "../CommonSlide/CommonSlide";


const ServiceSlider = () => {
    const [seviceData, setSeviceData] = useState([]);


    useEffect(() => {
        const dataFetching = async () => {
            try {
                const res = await fetch('service.json');
                const data = await res.json();
                setSeviceData(data)

            } catch (error) {
                console.log(error);
            }
        }

        dataFetching()

    }, [])





    return (

        <div className="lg:m-20 m-6">

            <CommonSlide data={seviceData} category={"services"}></CommonSlide>


        </div>


    );
};

export default ServiceSlider;