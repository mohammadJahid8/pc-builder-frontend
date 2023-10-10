import { useRouter } from "next/router";
import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsThreeDots } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import Link from "next/link";

const CategoryItem = ({ icon, label, route }) => {
  return (
    <Link href={route}>
      <div className="border border-gray-300 max-w-[110px] w-full h-24 p-2 hover:shadow-lg hover:text-violet-600 shadow-gray-400 flex flex-col justify-center items-center rounded-md transition-all duration-200 cursor-pointer mx-auto bg-[#ebecf8] text-[#384abb]">
        {icon}
        <p className="mt-1">{label}</p>
      </div>
    </Link>
  );
};

const FeaturedCategory = () => {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 mx-auto max-w-5xl mt-5">
        <CategoryItem
          icon={<BsCpuFill size={40} />}
          label="Processor"
          route="/cpu"
        />
        <CategoryItem
          icon={<BsFillMotherboardFill size={40} />}
          label="Motherboard"
          route="/motherboard"
        />
        <CategoryItem
          icon={<CgSmartphoneRam size={40} />}
          label="Ram"
          route="/ram"
        />
        <CategoryItem
          icon={<ImPowerCord size={40} />}
          label="PSU"
          route="/psu"
        />
        <CategoryItem
          icon={<MdStorage size={40} />}
          label="Storage"
          route="/storage"
        />
        <CategoryItem
          icon={<FiMonitor size={40} />}
          label="Monitor"
          route="/monitor"
        />
        <CategoryItem
          icon={<BsThreeDots size={40} />}
          label="Others"
          route="/others"
        />
      </div>
    </div>
  );
};

export default FeaturedCategory;
