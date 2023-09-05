import { FC } from "react";
import { Icon } from "./Icon";
import Link from "next/link";
import { navLinks } from "./Header";

type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
  const socialStyles = "w-[3rem] h-[3rem]";
  const iconSocialStyles = "icon-full !w-[3rem] !h-[3rem]";

  return (
    <div className="max-w-9/10 mx-auto rounded-6 bg-black px-[3rem] pt-[3rem] pb-[5rem] mb-[2rem]">
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 mobile:gap-[2rem] tablet:gap-[4rem]">
        <div>
          <div className="flex items-center tablet:justify-start mobile:justify-center gap-[1.5rem]">
            <Link className={socialStyles} href={""}>
              <Icon className={iconSocialStyles} name="facebook" />
            </Link>
            <Link href={""}>
              <Icon className={iconSocialStyles} name="zalo" />
            </Link>
            <Link href={""}>
              <Icon className={iconSocialStyles} name="instagram" />
            </Link>
            <Link href={""}>
              <Icon className={iconSocialStyles} name="youtube" />
            </Link>
          </div>
          <div className="flex flex-col">
            <p className="text-xl text-white mt-[2.5rem] mb-[1rem] ">
              © City Ford – Đại lý ủy quyền chính thức Ford Việt Nam
            </p>
            <p className="text-xl text-white mt-0 mb-[2rem] ">
              ® Chịu trách nhiệm nội dung Ông Quảng Trọng Lanh - Phụ Trách Kinh
              Doanh
            </p>
            <p className="text-xl text-white flex items-start my-[0.5rem]">
              <span className="min-w-[7.5rem] block"> Địa chỉ:</span> 218 Quốc
              Lộ 13, Phường Hiệp Bình Chánh, Quận Thủ Đức, Tp.Hồ Chí Minh
            </p>
            <p className="text-xl text-white flex items-start my-[0.5rem] ">
              <span className="min-w-[7.5rem] block"> Email:</span>{" "}
              <Link
                className="text-white"
                href={"mailto:tronglanhford@gmail.com"}
              >
                tronglanhford@gmail.com
              </Link>
            </p>
            <p className="text-xl text-white flex items-start my-[0.5rem] ">
              <span className="min-w-[7.5rem] block "> Điện thoại:</span>{" "}
              <Link className="text-white" href={"tel:0977760178"}>
                09777.60.178
              </Link>
            </p>
          </div>
        </div>
        <div className="flex  mobile:flex-col tablet:flex-row mobile:gap-[1rem] tablet:gap-[3rem] items-start justify-center ">
          {navLinks.map((link, idx) => (
            <Link
              className="text-white whitespace-nowrap relative block text-2xl z-10 py-[0.4rem] px-[1.2rem]  no-underline after after:content-[''] after:w-[0%] after:h-full transition-all duration-200 ease-in  after:transition-all after:duration-200 after:ease-in hover:after:left-0 hover:after: hover:text-black hover:after:w-[100%] after:bg-white after:absolute after:inline-block after:top-0 after:left-auto after:right-0 after:z-[-1]  "
              href={link.path}
              key={idx}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
