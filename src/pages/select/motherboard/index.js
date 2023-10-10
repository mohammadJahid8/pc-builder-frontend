import Title from "@/components/shared/Title";
import SelectProductCard from "@/components/ui/SelectProductCard";
import React from "react";

const SelectMotherboardPage = ({ motherboard }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-[60vh]">
      <div className="mt-5">
        <Title text={"Motherboard"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {motherboard?.map((product) => (
            <SelectProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectMotherboardPage;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-h49o.onrender.com/products?category=motherboard"
  );
  const data = await res.json();
  return {
    props: {
      motherboard: data,
    },
  };
};
