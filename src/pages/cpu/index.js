import ProductCard from "@/components/ui/ProductCard";
import React from "react";

const ProcessorPage = ({ processors }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <div className="mt-5">
        <h2 className="text-center text-lg font-semibold mb-3">Processor</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {processors?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessorPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-livid.vercel.app/products?category=cpu"
  );
  const data = await res.json();
  return {
    props: {
      processors: data,
    },
  };
};
