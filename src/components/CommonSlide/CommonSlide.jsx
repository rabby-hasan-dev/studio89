'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';



const CommonSlide = ({ data, category }) => {

    return (

        <div className='border-2 rounded-lg lg:m-10'>
            <h1 className="my-5 text-4xl  text-center font-bold uppercase">
                {category}
            </h1>
            <div className=' lg:m-8 text-center'>

                <Swiper
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 4,
                        },
                    }}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    initialSlide={1}
                    modules={[Navigation, Pagination,]}
                    className="mySwiper"
                >

                    {
                        data.map((item) => <SwiperSlide
                            slot='container-start'
                            key={item.id}

                        >
                            <div className=' border-2 lg:p-3  h-[240px] '>
                                <h3 className=' text-2xl uppercase mb-2 font-semibold'>{item?.name} </h3>
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




