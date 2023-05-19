import Image from "next/image";
import { FC } from "react";
import FacebookIcon from "public/images/facebook-icon.svg";
import ZaloIcon from "public/images/zalo-icon.svg";
import YoutubeIcon from "public/images/youtube-icon.svg";
import InstagramIcon from "public/images/instagram-icon.svg";
import CustomerIcon from "public/images/customer.svg";
import CarIcon from "public/images/car.svg";
import CloseIcon from "public/images/close-icon.svg";
import LocationIcon from "public/images/location.svg";
import NextArrowIcon from "public/images/arrow-next-icon.svg";

export type IconName =
  | "arrow-next"
  | "car"
  | "customer"
  | "location"
  | "close"
  | "facebook"
  | "zalo"
  | "instagram"
  | "youtube";

type IconProps = {
  name: IconName;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

export const Icon: FC<IconProps> = ({
  name,
  width,
  height,
  alt,
  className,
}) => {
  const renderName = () => {
    if (name === "arrow-next") return <NextArrowIcon />;
    if (name === "customer") return <CustomerIcon />;
    if (name === "location") return <LocationIcon />;
    if (name === "car") return <CarIcon />;
    if (name === "close") return <CloseIcon />;
    if (name === "facebook") return <FacebookIcon />;
    if (name === "zalo") return <ZaloIcon />;
    if (name === "instagram") return <InstagramIcon />;
    if (name === "youtube") return <YoutubeIcon />;
    return <NextArrowIcon />;
  };
  return <div className={`w-[2rem] h-[2rem] ${className}`}>{renderName()}</div>;
};
