import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderContent } from "./SliderContent";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function ContinentesSlide() {
  return (
    <Flex
      maxWidth={["100%", "90%"]}
      height={[200, 450]}
      mb={["6", "10"]}
      mt={["5", "12"]}
      mx="auto"
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ width: "100%" }}
      >
        <SwiperSlide>
          <SliderContent
            image="/images/europe.jpg"
            title="Europa"
            description="O continente mais antigo."
            url="/continents/europe"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent
            image="/images/africa.jpg"
            title="África"
            description="O verdadeiro continente mais antigo."
            url="/continents/africa"
          />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
