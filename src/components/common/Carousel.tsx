import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  // 옵션
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>section1</div>
        <div>section2</div>
        <div>section3</div>
      </Slider>
    </div>
  );
};

export default Carousel;
