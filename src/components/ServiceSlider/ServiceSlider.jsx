'use client'

import { useEffect, useState } from "react";
import CommonSlide from "../CommonSlide/CommonSlide";


const ServiceSlider = ({ category }) => {
    const [seviceData, setSeviceData] = useState([]);
    console.log(seviceData)

    useEffect(() => {
        const dataFetching = async () => {
            try {
                const res = await fetch('service.json');
                const data = await res.json();
                setSeviceData(data)
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        }

        dataFetching()

    }, [])





    return (

        <div className="m-20">

            <CommonSlide data={seviceData} category={"services"}></CommonSlide>


        </div>


    );
};

export default ServiceSlider;