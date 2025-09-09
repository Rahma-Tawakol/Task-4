import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductRow.css";

const products = [
    { id: 1, name: "Blueberry Muffin", img: "/assets/imgs/blu.png", price: "$3.99" },
    { id: 2, name: "Vanilla Espresso Shaker", img: "/assets/imgs/va.png", price: "$8.99" },
    { id: 3, name: "Earl Grey Tea", img: "/assets/imgs/tea.png", price: "$4.99" },
    { id: 4, name: "Turkey & Swiss Croissant", img: "/assets/imgs/co.png", price: "$7.00" },
    { id: 5, name: "Mixed Berry Smoothie", img: "/assets/imgs/stra.png", price: "$6.00" },
    { id: 6, name: "Malted Mocha", img: "/assets/imgs/mo.png", price: "$6.50" },
    { id: 7, name: "Cappuccino", img: "/assets/imgs/ca.png", price: "$5.50" },
    { id: 8, name: "Apple Cinnamon Pastry", img: "/assets/imgs/applec.png", price: "$5.00" },
    { id: 9, name: "Black Coffee", img: "/assets/imgs/black.png", price: "$5.00" },
];

export default function ProductRow() {
    return (
        <section className="product-section">
            <div className="product-row-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={{
                        nextEl: ".product-swiper-next",
                        prevEl: ".product-swiper-prev",
                    }}
                    pagination={{
                        el: ".product-swiper-pagination",
                        clickable: true,
                    }}
                    className="product-swiper"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>

                            <div className="product-card">
                                <img src={product.img} alt={product.name} className="product-img" />
                                <p className="product-title">{product.name}</p>
                                <div className="card-bottom">
                                    <div className="wishlist-icon">
                                        <i className="fa-regular fa-heart"></i>
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <p className="product-price">{product.price}</p>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}

                    {/* Floating arrows */}
                    <div className="product-swiper-prev"><i className="fas fa-angle-left"></i></div>
                    <div className="product-swiper-next"><i className="fas fa-angle-right"></i></div>
                </Swiper>

                {/* Pagination */}
                <div className="product-swiper-pagination"></div>
            </div>
        </section>
    );
}
