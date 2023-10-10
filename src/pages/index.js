import ProductCard from "@/components/ui/ProductCard";
import FeaturedCategory from "@/components/ui/FeaturedCategory";
import Banner from "@/components/ui/Banner";
import Title from "@/components/shared/Title";

const HomePage = ({ allProducts }) => {
  return (
    <div className=" pb-10 min-h-screen max-w-7xl mx-auto">
      <Banner />
      <div className="mt-16">
        <Title text={"Featured Products"} />

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-3">
          {allProducts?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>

      <div className="p-4">
        <Title text={"Featured Category"} />
        <FeaturedCategory />
      </div>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-h49o.onrender.com/products?featured=true"
  );
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
  };
};
