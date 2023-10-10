import Title from "@/components/shared/Title";
import ProductCard from "@/components/ui/ProductCard";

const MotherboardPage = ({ motherboard }) => {
  return (
    <div className="max-w-7xl mx-auto min-h-[50vh]">
      <div className="mt-5">
        <Title text={"Motherboard"} />
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {motherboard?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotherboardPage;

export const getStaticProps = async () => {
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
