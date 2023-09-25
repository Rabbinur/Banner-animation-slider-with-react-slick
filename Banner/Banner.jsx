import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banners } from "../../../../FakeApi/Banner";
import { Link } from "react-router-dom";
import "./Banner.css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const Banner = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  console.log(Banners);
  const settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };
  const slideStyles = (index) => {
    const transition = {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    };

    return {
      x: currentSlide === index ? "0%" : "100%",
      transition: transition,
    };
  };
  return (
    // <div className="w-full py-2 pb-10 banner ">
    //   <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
    //     {Banners.map((item) => (
    //       <motion.div
    //         initial={{ y: "100%" }}
    //         animate={{ y: "0%" }}
    //         transition={{ duration: 0.5 }}
    //         exit={{ opacity: 0 }}
    //         key={item._id}
    //         className="relative "
    //       >
    //         <img
    //           src={item.img}
    //           alt="Banner1"
    //           className="w-full sm:h-full h-[200px]"
    //         />
    //         <motion.div
    //           initial={{ x: "-100%" }}
    //           animate={{ x: "0%" }}
    //           transition={{ duration: 0.5 }}
    //           exit={{ opacity: 0 }}
    //           key={item._id}
    //           className="absolute top-[10%] lg:left-[15%] md:top-[30%] md:left-[15%] sm:top-[30%] sm:left-[10%] left-5"
    //         >
    //           <h6 className="text-[#777] sm:tracking-[.4em] py-2">
    //             Welcome To Fashion
    //           </h6>
    //           <h1 className="uppercase font-mono sm:text-[30px] lg:text-[60px] py-2">
    //             {item.name} Fashion
    //           </h1>
    //           <Link to={`/category/${item.category}`}>
    //             <button className="px-2 py-2 bg-[#403bf4] text-white">
    //               Shop Now
    //             </button>
    //           </Link>
    //         </motion.div>
    //       </motion.div>
    //     ))}
    //   </Slider>
    //   <div></div>
    //   <div></div>
    // </div>
    <div>
      <div className="w-full py-2 pb-10 banner overflow-hidden">
        <Slider {...settings}>
          {Banners.map((item, index) => (
            <div key={item._id} className="relative overflow-hidden">
              <img
                src={item.img}
                alt={`Banner ${index + 1}`}
                className="w-full sm:h-full h-[200px]"
              />
              <motion.div
                initial={{ x: "0%" }}
                animate={slideStyles(index)}
                transition={{ duration: 0.5 }}
                className="absolute top-[10%] lg:left-[15%] md:top-[30%] md:left-[15%] sm:top-[30%] sm:left-[10%] left-5"
              >
                <h6 className="text-[#777] sm:tracking-[.4em] py-2">
                  Welcome To Fashion
                </h6>
                <h1 className="uppercase font-mono sm:text-[30px] lg:text-[60px] py-2">
                  {item.name} Fashion
                </h1>
                <Link to={`/category/${item.category}`}>
                  <button className="px-2 py-2 bg-[#403bf4] text-white">
                    Shop Now
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-2">
          {Banners.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 mx-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => setInitialLoad(true)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
