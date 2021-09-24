import React from "react";
import Slider from "react-slick";

import './ProductSlider.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSlider({ images }) {
    const settings = {
        swipeToSlide: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="container">
            <Slider {...settings}>

                {images && images.map((image, index) => (
                    <img key={index} src={image} alt={index} />
                ))}

            </Slider>
        </div>

    );
}