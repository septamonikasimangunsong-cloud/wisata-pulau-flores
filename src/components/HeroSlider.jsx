import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "KULINER FLORES",
      description: "Sebuah surga tropis di jantung Kepulauan Banda, Maluku Tengah.",
      image: "jagung.jpg"
    },
    {
      id: 2,
      title: "Sejarah yang Kaya",
      description: "Banda Neira menyimpan warisan sejarah rempah dunia.",
      image: "https://source.unsplash.com/1600x900/?ocean,indonesia"
    },
    {
      id: 3,
      title: "Pesona Alam & Kehangatan Warga",
      description: "Keindahan laut, gunung api, dan keramahan penduduk.",
      image: "https://source.unsplash.com/1600x900/?beach,sunset"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="w-full h-[90vh]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[90vh]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;