'use client'

import { useEffect, useState } from "react";
import CommonSlide from "../CommonSlide/CommonSlide";



const PackageSlider = () => {
    const [seviceData, setSeviceData] = useState([]);


    useEffect(() => {
        const dataFetching = async () => {
            try {
                const res = await fetch('packageData.json');
                const data = await res.json();
                setSeviceData(data)
               
            } catch (error) {
                console.log(error);
            }
        }

        dataFetching()

    }, [])





    return (

        <div className="m-20">
            <CommonSlide data={seviceData} category={"packages"}></CommonSlide>
        </div>


    );
};

export default PackageSlider;