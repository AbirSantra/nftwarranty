import React from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Slider Images Imports
import sliderimg1 from "../images/sliderimg1.png";
import sliderimg2 from "../images/sliderimg2.png";
import sliderimg3 from "../images/sliderimg3.png";
import sliderimg4 from "../images/sliderimg4.png";

const Slider = () => {
	// slider images
	const sliderImages = [sliderimg1, sliderimg2, sliderimg3, sliderimg4];

	return (
		<div className="slider section">
			<div className="slider--content section--content ">
				<div className="slider--container w-full select-none relative rounded-xl overflow-hidden">
					<Swiper
						modules={[Pagination, EffectFade, Autoplay]}
						effect={"fade"}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						pagination={{ dynamicBullets: true }}
						slidesPerView={1}
						loop={true}
						className="w-full"
					>
						<SwiperSlide>
							<img src={sliderImages[0]} alt="slider content" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={sliderImages[1]} alt="slider content" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={sliderImages[2]} alt="slider content" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={sliderImages[3]} alt="slider content" />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Slider;
