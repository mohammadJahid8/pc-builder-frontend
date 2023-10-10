import Image from "next/image";

import React from "react";

const ProductDetails = ({ product }) => {
  const {
    name,
    category,
    price,
    description,
    status,
    rating,
    averageRating,
    keyFeatures,
    reviews,
    image,
  } = product || {};

  const categoryMap = {
    cpu: "Processor",
    motherboard: "Motherboard",
    ram: "Ram",
    psu: "Power Supply",
    storage: "Storage",
    monitor: "Monitor",
    others: "Others",
  };

  const newCategory = categoryMap[category] || null;

  const ratingIcon = () => (
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

  return (
    <div className="p-3 mt-5 md:mt-10 container mx-auto min-h-screen">
      <div className="xl:flex">
        <div className="xl:flex-1">
          <div className="flex-1 relative w-full max-w-sm h-80 mx-auto">
            <Image
              className="object-cover 
            hover:scale-105 transition-all duration-500 ease-in-out transform"
              fill={true}
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="xl:flex-1">
          <h2 className="text-lg md:text-xl font-semibold text-[#3749bb]">
            {name}
          </h2>
          <div className="mt-3">
            <p className="font-semibold text-gray-800 text-sm py-1 rounded-full inline-block my-1">
              Price : <span className="font-medium">{price} ৳</span>
            </p>
            {status == "inStock" ? (
              <p className="font-semibold text-gray-800 text-sm py-1 rounded-full mx-3 inline-block my-1">
                Status : <span className="font-medium">In stock</span>
              </p>
            ) : (
              <p className="font-semibold text-gray-800 text-sm py-1 rounded-full mx-3 inline-block my-1">
                Status : <span className="font-medium ">Out of stock</span>
              </p>
            )}
            <p className="font-semibold text-gray-800 text-sm py-1 rounded-full inline-block my-1">
              Category : <span className="font-medium">{newCategory}</span>
            </p>
          </div>
          <div className="mt-1">
            <p className="flex items-center text-sm font-semibold text-gray-800 gap-2">
              Rating :{" "}
              <span className="flex">
                {Array.from({ length: rating }).map((_, index) => (
                  <span className="" key={index}>
                    {ratingIcon()}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex items-center text-sm font-semibold text-gray-800 gap-2">
              Average Rating :{" "}
              <span className="flex">
                {Array.from({ length: averageRating }).map((_, index) => (
                  <span className="" key={index}>
                    {ratingIcon()}
                  </span>
                ))}
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800 mt-3 mb-1">
              Key Features
            </h3>

            {keyFeatures?.map((feature) => (
              <p className="text-md leading-relaxed text-sm text-gray-800">
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className=" font-semibold mb-1 text-sm text-gray-800">
          Description
        </h3>
        <p className="text-justify leading-relaxed text-sm text-gray-800">
          {description}
        </p>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold text-sm text-gray-800 mb-1 ">Reviews</h3>
        {reviews?.map((review) => (
          <p className="text-sm text-gray-800">{review}</p>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const response = await fetch(
    `https://pc-builder-backend-h49o.onrender.com/products`
  );
  const products = await response.json();
  return {
    paths: products.map((product) => ({
      params: { id: product._id },
    })),
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://pc-builder-backend-h49o.onrender.com/products/${id}`
  );
  const data = await response.json();
  return {
    props: {
      product: data,
    },
  };
};
