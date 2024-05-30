import Map from "../Map/Map";

import Image from "next/image";
import photo1 from '../../assets/gallery/pohoto (1).jpg';
import photo2 from '../../assets/gallery/pohoto (2).jpg';
import photo3 from '../../assets/gallery/pohoto (3).jpg';
import photo4 from '../../assets/gallery/pohoto (4).jpg';
import photo5 from '../../assets/gallery/pohoto (5).jpg';
import photo6 from '../../assets/gallery/pohoto (6).jpg';

const OfficeView = () => {
    return (
        <div className='uppercase text-center p-6 lg:m-20 lg:p-10'>
            <h2 className="text-4xl font-bold  my-12 ">Office View</h2>
            <div className="lg:flex justify-around items-center gap-8">
                <div className=" w-full  rounded-lg">
                    <Map></Map>
                </div>
                <div className=" w-full  rounded-lg mt-5 lg:mt-0  ">
                    <div className="grid grid-cols-2 gap-2 shadow-2xl ">
                        <Image src={photo1} alt="gellary"></Image>
                        <Image src={photo2} alt="gellary"></Image>
                        <Image src={photo3} alt="gellary"></Image>
                        <Image src={photo4} alt="gellary"></Image>
                        <Image src={photo5} alt="gellary"></Image>
                        <Image src={photo6} alt="gellary"></Image>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OfficeView;