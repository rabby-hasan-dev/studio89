import Image from "next/image";

import programmers from '@/assets/programmers.png';
import Card from "@/components/card/Card";
import icon1 from '../../../assets/icon-1.png';
import icon2 from '../../../assets/icon-2.png';
import icon3 from '../../../assets/icon-3.png';
import icon4 from '../../../assets/icon-4.png';
import icon5 from '../../../assets/icon-5.png';
import icon6 from '../../../assets/icon-6.png';

const Services = () => {
    return (
        <div className=" md:py-24 py-16 md:px-8 ">

            <div className="grid lg:grid-cols-2 gap-10  ">
                <div>
                    <h2 className="text-4xl font-bold">The only place to learn <br></br> <span className=" text-green-700">everything</span></h2>
                    <p className="text-xl">Go to the section of your choice to learn anything on any topic</p>
                    <Image
                        src={programmers}
                        width={549}
                        height={549}
                        className="my-4"
                    ></Image>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">

                   <Card image={icon1} title={'Kid Zone'} description={'Go here to view all content for clases 5-9'}></Card>
                   <Card image={icon2} title={'Creativity'} description={'Go here to see Graphics, Motion, Illustrations content'}></Card>
                   <Card image={icon3} title={'Development'} description={'Go here to see all coding related content'}></Card>
                   <Card image={icon4} title={'Self Growth'} description={'Go here to see all the content on making yourself proffesional'}></Card>
                   <Card image={icon5} title={'Academic'} description={'Go here to see all the content of Entrance Test, Job Test, IELTS, Higher Education'}></Card>
                   <Card image={icon6} title={'Extra Activities'} description={'Go here to see all the content of Being Extraordinary'}></Card>
                   
                   
                  
                   


                </div>
            </div>
        </div>
    );
};

export default Services;