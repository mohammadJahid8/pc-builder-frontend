import { Carousel } from "antd";
import Image from "next/image";

const Banner = () => (
  <div className="sm:mt-5">
    <Carousel autoplay effect="fade">
      <div className="">
        <Image
          width={400}
          height={400}
          src="https://www.cloud.ryanscomputers.com/cdn/sliders/HP-AIO-200-Pro-G4-Main-Slide_1696683318.webp"
          alt=""
          className="mx-auto w-full outline-none border-none h:[300px] lg:h-[600px]"
          quality={100}
          priority={true}
        />
      </div>
      <div>
        <Image
          width={400}
          height={400}
          src="https://www.cloud.ryanscomputers.com/cdn/sliders/Ryans-Pc--Collection-Main-Slide_1696769464.webp"
          alt=""
          className="mx-auto w-full outline-none border-none h:[300px] lg:h-[600px]"
          quality={100}
          priority={true}
        />
      </div>
      <div>
        <Image
          width={400}
          height={400}
          src="https://www.startech.com.bd/image/catalog/home/banner/small/budget-desktop-pc-27k.webp"
          alt=""
          className="mx-auto w-full outline-none border-none h:[300px] lg:h-[600px]"
          quality={100}
          priority={true}
        />
      </div>
    </Carousel>
  </div>
);
export default Banner;
