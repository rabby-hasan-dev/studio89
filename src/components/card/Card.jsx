"use client"

import Image from "next/image";

const Card = ({ image, title, description }) => {
    return (
        <div className="px-2  py-4 w-full">
            <div className="dark:bg-[#001d30]  lg:h-[220px]  shadow-lg border rounded-lg border-gray-600  flex   items-center flex-col justify-center text-center   hover:bg-blue-600 duration-300">
                <figure className="px-10 pt-10">
                    <Image
                        src={image}
                        width={200}
                        alt="card-icon"
                        className="rounded-lg my-2"
                    ></Image>
                </figure>
                <div className=" flex flex-col items-center justify-center text-center mb-10">
                    <h2 className="card-title">{title} </h2>
                    <p>{description} </p>

                </div>
            </div>
        </div>
    );
};

export default Card;