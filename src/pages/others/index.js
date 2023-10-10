import ProductCard from "@/components/ui/ProductCard";
import React from "react";

const OthersPage = ({ others }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-[50vh]">
      <div className="mt-5">
        <Title text={"Others"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {others?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OthersPage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-h49o.onrender.com/products?category=others"
  );
  const data = await res.json();
  return {
    props: {
      others: data,
    },
  };
};
