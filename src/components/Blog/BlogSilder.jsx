import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaCalendarAlt, FaRegClock } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './blogslider.css'; // ✅ custom styles override

const slides = [
    {
        image: 'https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg?crop=0.668xw:1.00xh;0.106xw,0&resize=1200:*',
        tag: 'Fitness',
        date: 'May 12, 2023',
        time: '7 min read',
        title: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry',
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg?crop=0.668xw:1.00xh;0.106xw,0&resize=1200:*',
        tag: 'Workout',
        date: 'May 12, 2023',
        time: '7 min read',
        title: 'Another Inspiring Title For The Carousel Display',
    },
    {
        image: 'https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg?crop=0.668xw:1.00xh;0.106xw,0&resize=1200:*',
        tag: 'Health',
        date: 'May 12, 2023',
        time: '7 min read',
        title: 'Training Tips For Building Muscle And Strength Fast',
    },
];

const sidebarItems = [...Array(4)].map(() => ({
    thumb: 'https://hips.hearstapps.com/hmg-prod/images/workout-morning-1566312037.jpg?crop=0.668xw:1.00xh;0.106xw,0&resize=1200:*',
    title: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry',
    date: 'May 12, 2023',
    time: '7 min',
}));

const BlogSlider = () => {
    return (
        <div className=" text-white py-10 flex flex-col lg:flex-row gap-8">
            {/* LEFT SLIDER */}
            <div className="lg:w-2/3 relative">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="rounded-lg overflow-hidden h-full custom-swiper"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative h-[560px] md:h-[600px] w-full">
                                <img
                                    src={slide.image}
                                    alt="slide"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-8  p-6 w-full">
                                    <span className="bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                                        {slide.tag}
                                    </span>
                                    <div className="flex items-center text-sm mt-2 text-gray-300 space-x-4">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-white" /> {slide.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaRegClock className="text-white" /> {slide.time}
                                        </span>
                                    </div>

                                    <h2 className="text-xl md:text-2xl font-bold mt-2">
                                        {slide.title}
                                    </h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* RIGHT SIDEBAR */}
            <div className="lg:w-1/3 flex flex-col justify-between gap-2">
                {sidebarItems.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3 border-b border-gray-600 pb-6">
                        <div className="flex gap-4 items-start">
                            <img
                                src={item.thumb}
                                alt="thumb"
                                className="w-24 h-20 rounded-md object-cover"
                            />
                            <div className="flex flex-col justify-between">
                                <h3 className="text-sm font-semibold leading-snug">
                                    {item.title}
                                </h3>
                                <div className="flex items-center text-xs text-gray-400 mt-2 gap-4">
                                    <span className="flex items-center gap-1">
                                        <FaCalendarAlt className="text-white text-[10px]" />
                                        {item.date}
                                    </span>
                                    <span className="border-r border-gray-500 h-4"></span>
                                    <span className="flex items-center gap-1">
                                        <FaRegClock className="text-white text-[10px]" />
                                        {item.time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BlogSlider;

