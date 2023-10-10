import ProductCard from "@/components/ui/ProductCard";
import React from "react";

const MonitorPage = ({ monitors }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-[50vh]">
      <div className="mt-5">
        <Title text={"Monitor"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {monitors?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonitorPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-h49o.onrender.com/products?category=monitor"
  );
  const data = await res.json();
  return {
    props: {
      monitors: data,
    },
  };
};
