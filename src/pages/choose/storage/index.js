import Title from "@/components/shared/Title";
import ChooseProductCard from "@/components/ui/ChooseProductCard";
import React from "react";

const SelectStoragePage = ({ storages }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-[60vh]">
      <div className="mt-5">
        <Title text={"Storage"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {storages?.map((product) => (
            <ChooseProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectStoragePage;
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-h49o.onrender.com/products?category=storage"
  );
  const data = await res.json();
  return {
    props: {
      storages: data,
    },
  };
};
