import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const ProductCard = ({ product }) => {
  const { _id, name, category, price, image, status, rating } = product || {};

  const categoryMappings = {
    cpu: "Processor",
    motherboard: "Motherboard",
    ram: "Ram",
    psu: "Power Supply",
    storage: "Storage",
    monitor: "Monitor",
    others: "Others",
  };

  const statusMappings = {
    inStock: "In Stock",
    outOfStock: "Out Of Stock",
  };

  const newCategory = categoryMappings[category] || null;
  const newStatus = statusMappings[status] || null;

  const router = useRouter();

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
    <Link
      href={`/products/${_id}`}
      passHref
      className="max-w-[270px] w-full mx-auto border border-gray-300 bg-white rounded-md shadow-md cursor-pointer flex flex-col gap-2 justify-between"
    >
      <div className="h-[240px] relative">
        <Image
          fill={true}
          className="object-cover rounded-md hover:opacity-80 transition-opacity duration-300 ease-in-out"
          src={image}
          alt=""
        />
      </div>
      <div className="px-2">
        <h1 className="font-semibold mt-1 mb-2 text-sm text-gray-800">
          {name.length > 30 ? name.slice(0, 22) + "..." : name}
        </h1>
      </div>

      <div className="p-2">
        <div className="flex justify-between text-xs uppercase text-gray-800">
          <span className="">{newCategory}</span>
          <span
            className={`${
              product.status === "inStock" ? "text-green-700" : "text-red-600"
            } font-semibold`}
          >
            {newStatus}
          </span>
        </div>
        <div className="flex justify-between mt-3">
          <span className="flex">
            {Array.from({ length: rating }).map((_, index) => (
              <span className="" key={index}>
                {ratingIcon()}
              </span>
            ))}
          </span>
          <span className="font-semibold text-sm">
            {product.price} <span className="">৳</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
