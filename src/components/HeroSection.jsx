import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "./HeroSection.css";

const heroSlides = [
    {
        title: "Apple Cinnamon Pastry",
        desc: "Dense sweet pastry filled with Honeycrisp apples and cinnamon.",
        img: "/assets/imgs/applec.png",
    },
    {
        title: "Black Coffee",
        desc: "Caribou Blend coffee steamed to order.",
        img: "/assets/imgs/black.png",
    },
    {
        title: "Malted Mocha",
        desc: "Coffee blended with ice, real chocolate, and malted milk powder; topped with whipped cream and chocolate drizzle.",
        img: "/assets/imgs/mo.png",
    },
    {
        title: "Turkey & Swiss Croissant",
        desc: "Smoked turkey and Swiss cheese on a toasted butter croissant.",
        img: "/assets/imgs/co.png",
    },
    {
        title: "Cappuccino",
        desc: "Espresso and steamed milk topped with a deep layer of foam.",
        img: "/assets/imgs/ca.png",
    },
];

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Text animation (slide from the left)
    const textVariants = {
        enter: { x: -150, opacity: 0 },
        center: {
            x: 30,
            opacity: 1,
            transition: { duration: 0.8, delay: 0.2 },
        },
        exit: { x: -150, opacity: 0, transition: { duration: 0.6 } },
    };

    // Image animation (slide from the right)
    const imageVariants = {
        enter: { x: 150, opacity: 0 },
        center: {
            x: 50,
            opacity: 1,
            transition: { duration: 0.8 },
        },
        exit: { x: 150, opacity: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="hero-wrapper">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: false }}
                loop={true}
                speed={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="hero-swiper"
            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="hero-container">
                            {/* Text */}
                            <div className="hero-text">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <motion.div
                                            key={slide.title}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            variants={textVariants}
                                        >
                                            <h2>{slide.title}</h2>
                                            <p>{slide.desc}</p>
                                            <a href="#">View Nutrition & Allergens</a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Image */}
                            <div className="hero-image">
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <motion.img
                                            key={slide.img}
                                            src={slide.img}
                                            alt={slide.title}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            variants={imageVariants}
                                        />
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
