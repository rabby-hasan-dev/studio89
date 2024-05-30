'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const CommonSlide = ({ data, category }) => {

    return (

        <div className='border-2 rounded-lg m-10'>
            <h1 className="my-5 text-4xl  text-center font-bold uppercase">
                {category}
            </h1>
            <div className='m-8 text-center'>

                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation, Pagination,]}
                    className="mySwiper"
                >

                    {
                        data.map((item) => <SwiperSlide
                            key={item.id}

                        >
                            <div className=' border-2 p-3 '>
                                <h3 className='text-2xl uppercase font-semibold'>{item?.name} </h3>
                                <p>{item?.description} </p>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </div>

    );
};

export default CommonSlide;




