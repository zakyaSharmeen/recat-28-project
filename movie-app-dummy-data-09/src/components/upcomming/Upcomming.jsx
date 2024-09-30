import React from 'react'
import { Link } from 'react-router-dom'
import Ucard from './Ucard'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


function Upcomming({ items, title }) {
    return (
        <>
            <section className='upcome'>
                <div className="container">
                    <div className="heading flexSB">
                        <h1>{title}</h1>
                        <Link to="/">View All</Link>
                    </div>
                    <div className="content">
                        {/* {
                    items.map((item) => (
                        <Ucard key={item.id} item={item}/>
                    ))
                } */}

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                         
                            navigation={true} 
                            modules={[Navigation]}  
                            className="mySwiper"
                        >
                            { items.map((item) =>  ( <SwiperSlide key={item.id}>
                        <Ucard key={item.id} item={item}/>
                        </SwiperSlide>
                    ))}
                          
                                

                          
                            
                        </Swiper>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Upcomming