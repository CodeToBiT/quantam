import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../card/TestimonialCard";
import { VscTriangleRight } from "react-icons/vsc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

import Image from "next/image";

import { useRef } from "react";

const TestimonailSlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [testimonials, setTestimonials] = useState([]);
  const fetchTestimonials = () => {
    fetch("https://admin.quantumleap.edu.np/api/testimonials")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTestimonials(data);
      });
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <>
      <div className="testimonials-slider">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.data?.map((data, key) => {
            return (
              <div key={key}>
                <TestimonialCard
                  image={data.image}
                  name={data.name}
                  description={data.description}
                />
              </div>
            );
          })}
        </Slider>
        <div className="sliderarrow">
          <button onClick={() => sliderRef.current.slickNext()}>
            <VscTriangleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default TestimonailSlider;
