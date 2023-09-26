import Slider from "react-slick";
import OneComment from "./OneComment";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
      <OneComment />
    </Slider>
  );
}

export default AutoPlay;
