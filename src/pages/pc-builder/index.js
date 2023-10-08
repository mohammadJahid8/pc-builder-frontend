import React from "react";
import { BsCpuFill, BsFillMotherboardFill, BsThreeDots } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Image from "next/image";
const createSVGIcon = () => (
  <svg
    className="rating-icon"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 22 20"
    fill="orange"
    height="15px"
    width="15px"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const PcBuildPage = () => {
  const router = useRouter();
  const { cpu, motherboard, ram, psu, storage, monitor } = useSelector(
    (state) => state.pcBuild
  );

  const isDataExist = () => {
    return cpu && motherboard && ram && psu && storage && monitor;
  };
  return (
    <div
      className="flex justify-center mx-auto  border-gray-300 mt-5 border px-4 py-2 shadow-md rounded-md mb-10"
      style={{
        maxWidth: "50rem",
      }}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-base text-start my-4 text-[#3749bb]">
            PC Builder - Build Your Own Computer
          </h1>
          <button className="rounded-sm bg-[#3749bb] px-3 py-2 text-white text-sm">
            1000৳
          </button>
        </div>
        <div className="flex justify-between items-center  p-2">
          <div className="flex items-center gap-6 ">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col items-center rounded-md transition-all duration-200">
              <BsCpuFill size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-600">PROCESSOR</p>

              {cpu ? (
                <div className="flex justify-between items-center gap-2 lg:w-[150%] py-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col  rounded-md transition-all duration-200">
                      <Image src={cpu?.image} height={45} width={45} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium max-w-[450px]">{cpu.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="flex">
                            {Array.from({ length: cpu?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                          <p className="text-black font-semibold whitespace-nowrap text-[13px] mt-1">
                            {cpu.price} ৳
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-sm animate-pulse">
                  <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/select/cpu")}
            className=" outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>

        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-6 ">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col items-center rounded-md transition-all duration-200">
              <BsFillMotherboardFill size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-600">MOTHERBOARD</p>

              {motherboard ? (
                <div className="flex justify-between items-center gap-2 lg:w-[150%] py-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col  rounded-md transition-all duration-200">
                      <Image src={motherboard?.image} height={45} width={45} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium max-w-[450px]">
                          {motherboard.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="flex">
                            {Array.from({ length: motherboard?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                          <p className="text-black font-semibold whitespace-nowrap text-[13px] mt-1">
                            {motherboard.price} ৳
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-sm animate-pulse">
                  <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/select/motherboard")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>

        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-6 ">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col items-center rounded-md transition-all duration-200">
              <CgSmartphoneRam size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-600">RAM</p>

              {ram ? (
                <div className="flex justify-between items-center gap-2 lg:w-[150%] py-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col  rounded-md transition-all duration-200">
                      <Image src={ram?.image} height={45} width={45} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium max-w-[450px]">{ram.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="flex">
                            {Array.from({ length: ram?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                          <p className="text-black font-semibold whitespace-nowrap text-[13px] mt-1">
                            {ram.price} ৳
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-sm animate-pulse">
                  <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/select/ram")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>

        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-6 ">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col items-center rounded-md transition-all duration-200">
              <ImPowerCord size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-600">POWER SUPPLY</p>

              {psu ? (
                <div className="flex justify-between items-center gap-2 lg:w-[150%] py-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col  rounded-md transition-all duration-200">
                      <Image src={psu?.image} height={45} width={45} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium max-w-[450px]">{psu.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="flex">
                            {Array.from({ length: psu?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                          <p className="text-black font-semibold whitespace-nowrap text-[13px] mt-1">
                            {psu.price} ৳
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-sm animate-pulse">
                  <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/select/psu")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>

        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-6 ">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col items-center rounded-md transition-all duration-200">
              <MdStorage size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-600">STORAGE</p>

              {storage ? (
                <div className="flex justify-between items-center gap-2 lg:w-[150%] py-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col  rounded-md transition-all duration-200">
                      <Image src={storage?.image} height={45} width={45} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium max-w-[450px]">
                          {storage?.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="flex">
                            {Array.from({ length: storage?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                          <p className="text-black font-semibold whitespace-nowrap text-[13px] mt-1">
                            {storage.price} ৳
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-sm animate-pulse">
                  <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/select/storage")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>

        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center p-2">
          <div className="flex items-center gap-6 ">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col items-center rounded-md transition-all duration-200">
              <FiMonitor size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-xs text-gray-600">MONITOR</p>

              {monitor ? (
                <div className="flex justify-between items-center gap-2 lg:w-[150%] py-2">
                  <div className="flex items-center gap-2 w-full">
                    <div className="flex flex-col  rounded-md transition-all duration-200">
                      <Image src={monitor?.image} height={45} width={45} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium max-w-[450px]">
                          {monitor?.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="flex">
                            {Array.from({ length: monitor?.rating }).map(
                              (_, index) => (
                                <span className="" key={index}>
                                  {createSVGIcon()}
                                </span>
                              )
                            )}
                          </p>
                          <p className="text-black font-semibold whitespace-nowrap text-[13px] mt-1">
                            {monitor.price} ৳
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="max-w-sm animate-pulse">
                  <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/select/monitor")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>

        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="text-end">
          <button
            disabled={!isDataExist()}
            onClick={() =>
              toast.success("You have built your PC successfully!")
            }
            className="text-sm border border-[#3749bb] bg-[#3749bb] text-white hover:bg-white transition-all hover:text-black hover:border-black px-4 py-1.5 my-5 font-medium rounded-sm uppercase disabled:bg-gray-400"
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuildPage;
