import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSection from "./CarouselSection";
import CarouselSection2 from "./CarouselSection2";
import CarouselSection3 from "./CarouselSection3";
import CarouselSection4 from "./CarouselSection4";

const Carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
    };
    return (
        <Slider {...settings}>
            <CarouselSection />
            <CarouselSection2 />
            <CarouselSection3 />
            <CarouselSection4 />
        </Slider>
    );
};

export default Carousel;
