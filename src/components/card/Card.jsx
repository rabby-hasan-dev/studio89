"use client"

import Image from "next/image";

const Card = ({ image, title, description }) => {
    return (
        <div className="p-4 hover:bg-blue duration-300  w-full">
            <div className="dark:bg-[#001d30]  h-[220px]  shadow-lg border rounded-lg border-gray-600  flex   items-center flex-col justify-center text-center ">
                <figure className="px-10 pt-10">
                    <Image
                        src={image}
                        width={100}
                        alt="card-icon"
                    ></Image>
                </figure>
                <div className=" flex flex-col items-center justify-center text-center my-2">
                    <h2 className="card-title">{title} </h2>
                    <p>{description} </p>

                </div>
            </div>
        </div>
    );
};

export default Card;