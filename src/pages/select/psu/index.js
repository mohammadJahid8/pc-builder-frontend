import SelectProductCard from "@/components/ui/SelectProductCard";
import React from "react";

const SelectPsuPage = ({ psu }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="mt-5">
        <h2 className="text-center text-lg font-semibold mb-3">Processor</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {psu?.map((product) => (
            <SelectProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectPsuPage;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-livid.vercel.app/products?category=psu"
  );
  const data = await res.json();
  return {
    props: {
      psu: data,
    },
  };
};
