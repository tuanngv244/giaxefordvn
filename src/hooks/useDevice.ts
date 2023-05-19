import { useEffect, useState } from "react";

export enum Device {
  Mobile = "MOBILE",
  Tablet = "TABLET",
  Laptop = "LAPTOP",
  LaptopLarge = "LAPTOP_LARGE",
}

export const useDevice = () => {
  const [screenW, setScreenW] = useState<number>();
  const device = () => {
    if (!screenW) return Device.Mobile;
    if (screenW <= 768) return Device.Mobile;
    if (768 < screenW && screenW <= 992) return Device.Tablet;
    if (992 < screenW && screenW <= 1366) return Device.Laptop;
    if (1366 < screenW) return Device.LaptopLarge;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenW(window.screen.width);
    }
  }, []);

  return {
    currentScreen: screenW,
    device: device(),
  };
};
