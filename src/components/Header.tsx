import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FordLogo from "public/images/ford-logo.png";
import { Device, useDevice } from "@/hooks/useDevice";

type HeaderProps = {};

type NavLinks = Array<{
  label: string;
  path: string;
  subChildren?: Array<{
    label: string;
    path: string;
    img?: string;
    price?: string;
  }>;
}>;

export const navLinks: NavLinks = [
  {
    label: "Sản phẩm",
    path: "/san-pham",
    subChildren: [
      {
        label: "Ford Raptor",
        path: "san-pham/ford-raptor",
        img: "",
        price: "",
      },
      {
        label: "Ford Explander",
        path: "san-pham/ford-explander",
        img: "",
        price: "",
      },
    ],
  },
  {
    label: "Trả góp",
    path: "/tra-gop",
  },
  {
    label: "Bảng giá",
    path: "/bang-gia",
  },
  {
    label: "Dịch vụ",
    path: "/dich-vu",
  },
  {
    label: "Liên hệ",
    path: "/lien-he",
  },
];

export const Header: FC<HeaderProps> = () => {
  const [show, setShow] = useState<boolean>(false);
  const { device } = useDevice();

  const renderNav = () => {
    const navDifferenceMobileStyles =
      "flex content-center items-center space-x-7";
    const navMobileStyles = `flex flex-col max-w-[100%] ${
      show ? "h-[100vh] p-[2rem]" : "h-[0]"
    } overflow-hidden transition  ease-in  duration-500 bg-white`;

    const textLinkDifferenceMobileStyles =
      "text-xl font-500 relative  text-main hover:bg-main600  transition  ease-in  duration-300 hover:text-white rounded-30 px-[2rem] py-[1rem]  no-underline border border-solid border-main";

    const textLinkMobileStyles =
      "text-xl font-500 relative  text-main text-center hover:bg-main600  transition  ease-in  duration-300 hover:text-white rounded-30 px-[2rem] py-[1rem]  no-underline border border-solid border-main max-w-[100%] block my-[1rem]";

    const renderNavStyles =
      device === Device.Mobile ? navMobileStyles : navDifferenceMobileStyles;

    const renderTextLinkStyles =
      device === Device.Mobile
        ? textLinkMobileStyles
        : textLinkDifferenceMobileStyles;

    return (
      <ul className={renderNavStyles}>
        {navLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link className={renderTextLinkStyles} href={link.path}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 py-[1rem] bg-white  backdrop-blur-md border-0 border-b  border-main border-solid shadow-header ">
      <div className="flex justify-between items-center content-center  max-w-9/10  mx-auto">
        <div className="px-2 tablet:w-[13.5rem] tablet:h-[5rem] mobile:w-[11rem] mobile:h-[4rem]">
          <Link href={"/"}>
            {" "}
            <Image
              src={FordLogo}
              className="w-full h-full object-cover"
              alt="Giá xe Ford VN"
            />
          </Link>
        </div>
        {device !== Device.Mobile && renderNav()}
        {device === Device.Mobile && (
          <div
            onClick={() => setShow((prev) => !prev)}
            className="flex flex-col relative items-center"
          >
            {Array.from({ length: 3 }).map((entity, idx) => (
              <span
                key={idx}
                className=" content w-[2.5rem]  h-[0.2rem] bg-black rounded-6 block my-[0.2rem] "
              ></span>
            ))}
          </div>
        )}
      </div>
      {device === Device.Mobile && renderNav()}
    </header>
  );
};
