import { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import { Device, useDevice } from "@/hooks/useDevice";

type BannerSliderProps<T extends object = any> = {
  data: T[];
};

export const BannerSlider: FC<BannerSliderProps> = ({ data }) => {
  const { device } = useDevice();
  return (
    <Splide
      options={{
        type: "loop",
        gap: device === Device.Mobile ? 0 : "5rem",
        padding: device === Device.Mobile ? 0 : "15rem",
        autoplay: true,
        interval: 4000,
        pagination: false,
        perPage: 1,
      }}
      aria-label="My Favorite Images"
    >
      {data?.map((entity, idx) => (
        <SplideSlide key={idx}>
          <img
            src={entity?.image_url as string}
            className="w-full mobile:h-[50vh] tablet:h-[calc(100vh-12rem)] laptop_large:h-[calc(100vh-10rem)] "
            alt={entity?.label}
          />
          <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-[-50%] z-50  ">
            <h2 className="text-6xl text-white my-[2rem] ">GIÁ XE FORD VN</h2>
            <p className="text-3xl text-white mx-auto max-w-[30rem] text-center">
              Giá xe Ford VN - chất lượng tạo nên thương hiệu.
            </p>
          </div>
          <div className=" content-[''] w-full h-[70%]  absolute bottom-0 left-0 bg-gradient-to-t to-transparent from-black"></div>
        </SplideSlide>
      ))}
    </Splide>
  );
};
