import { useEffect, useState } from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoplay(true);
    }, settings.autoplaySpeed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Slider
        {...settings}
        autoplay={autoplay}
        beforeChange={() => setAutoplay(false)}
        
      >
        <div>slaom</div>
        <div>slaom</div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
