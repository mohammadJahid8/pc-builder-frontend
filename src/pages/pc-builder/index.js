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

  const isDataFulfilled = () => {
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
        <div className="flex justify-between items-center gap-2 p-2">
          <div className="flex items-center gap-6">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
              <BsCpuFill size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-sm text-black">PROCESSOR</p>

              {cpu ? (
                <div className="flex justify-between items-center gap-2  p-2">
                  <div className="flex items-center w-full">
                    <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                      <Image src={cpu?.image} height={35} width={35} />
                    </div>
                    <div className="flex justify-between w-full gap-3">
                      <div>
                        <p className="font-medium">{cpu.name}</p>
                        <p className="flex">
                          {Array.from({ length: cpu?.rating }).map(
                            (_, index) => (
                              <span className="" key={index}>
                                {createSVGIcon()}
                              </span>
                            )
                          )}
                        </p>
                      </div>
                      <p className="text-red-500 font-medium whitespace-nowrap">
                        {cpu.price} /-
                      </p>
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
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>
        {/* {cpu && (
          <div className="flex justify-between items-center gap-2  p-2">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                <Image src={cpu?.image} height={35} width={35} />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p className="font-medium">{cpu.name}</p>
                  <p className="flex">
                    {Array.from({ length: cpu?.rating }).map((_, index) => (
                      <span className="" key={index}>
                        {createSVGIcon()}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-red-500 font-medium whitespace-nowrap">
                  {cpu.price} /-
                </p>
              </div>
            </div>
          </div>
        )} */}
        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center gap-2 p-2">
          <div className="flex items-center gap-6">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
              <BsFillMotherboardFill size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-sm text-black">MOTHERBOARD</p>
              <div className="max-w-sm animate-pulse">
                <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/select/motherboard")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>
        {motherboard && (
          <div className="flex justify-between items-center gap-2  p-2">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                <Image src={motherboard?.image} height={35} width={35} />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p className="font-medium">{motherboard.name}</p>
                  <p className="flex">
                    {Array.from({ length: motherboard?.rating }).map(
                      (_, index) => (
                        <span className="" key={index}>
                          {createSVGIcon()}
                        </span>
                      )
                    )}
                  </p>
                </div>
                <p className="text-red-500 font-medium whitespace-nowrap">
                  {motherboard.price} /-
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center gap-2 p-2">
          <div className="flex items-center gap-6">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
              <CgSmartphoneRam size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-sm text-black">RAM</p>
              <div className="max-w-sm animate-pulse">
                <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/select/ram")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>
        {ram && (
          <div className="flex justify-between items-center gap-2  p-2">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                <Image src={ram?.image} height={35} width={35} />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p className="font-medium">{ram.name}</p>
                  <p className="flex">
                    {Array.from({ length: ram?.rating }).map((_, index) => (
                      <span className="" key={index}>
                        {createSVGIcon()}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-red-500 font-medium whitespace-nowrap">
                  {ram.price} /-
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center gap-2 p-2">
          <div className="flex items-center gap-6">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
              <ImPowerCord size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-sm text-black">POWER SUPPLY</p>
              <div className="max-w-sm animate-pulse">
                <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/select/psu")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>
        {psu && (
          <div className="flex justify-between items-center gap-2  p-2">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                <Image src={psu?.image} height={35} width={35} />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p className="font-medium">{psu.name}</p>
                  <p className="flex">
                    {Array.from({ length: psu?.rating }).map((_, index) => (
                      <span className="" key={index}>
                        {createSVGIcon()}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-red-500 font-medium whitespace-nowrap">
                  {psu.price} /-
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center gap-2 p-2">
          <div className="flex items-center gap-6">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
              <MdStorage size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-sm text-black">STORAGE</p>
              <div className="max-w-sm animate-pulse">
                <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/select/storage")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>
        {storage && (
          <div className="flex justify-between items-center gap-2  p-2">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                <Image src={storage?.image} height={35} width={35} />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p className="font-medium">{storage.name}</p>
                  <p className="flex">
                    {Array.from({ length: storage?.rating }).map((_, index) => (
                      <span className="" key={index}>
                        {createSVGIcon()}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-red-500 font-medium whitespace-nowrap">
                  {storage.price} /-
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="flex justify-between items-center gap-2 p-2">
          <div className="flex items-center gap-6">
            <div className="bg-[#ebecf8] p-[15px] shadow-gray-400 flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
              <FiMonitor size={30} className="text-[#384abb]" />
            </div>
            <div>
              <p className="mt-1 text-sm text-black">MONITOR</p>
              <div className="max-w-sm animate-pulse">
                <div className="h-3 bg-gray-200 rounded-sm dark:bg-gray-300 w-36 md:w-64 lg:w-96"></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push("/select/monitor")}
            className="outline-[#3749bb] bg-white border border-[#3749bb] font-medium text-xs  py-1 cursor-pointer px-3 rounded-sm hover:bg-[#3749bb] transition-all hover:text-white"
          >
            Choose
          </button>
        </div>
        {monitor && (
          <div className="flex justify-between items-center gap-2  p-2">
            <div className="flex items-center w-full">
              <div className="flex flex-col w-full max-w-[90px] items-center rounded-md transition-all duration-200">
                <Image src={monitor?.image} height={35} width={35} />
              </div>
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p className="font-medium">{monitor.name}</p>
                  <p className="flex">
                    {Array.from({ length: monitor?.rating }).map((_, index) => (
                      <span className="" key={index}>
                        {createSVGIcon()}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-red-500 font-medium whitespace-nowrap">
                  {monitor.price} /-
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="border-b w-full border-gray-300 my-1"></div>

        <div className="text-end">
          <button
            disabled={!isDataFulfilled()}
            onClick={() => toast.success("Build completed successfully")}
            className=" bg-[#3749bb] text-white px-4 py-1.5 my-5 font-medium rounded-sm uppercase disabled:bg-gray-400"
          >
            Complete Build
          </button>
        </div>
      </div>
    </div>
  );
};

export default PcBuildPage;
