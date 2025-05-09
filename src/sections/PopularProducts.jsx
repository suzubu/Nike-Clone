// === [ PopularProducts Section ] ===
// Displays a grid of featured product cards using the PopularProductCard component.
// Includes section heading, description, and a responsive product grid layout.

import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

// Functional section definition
const PopularProducts = () => {
  return (
    <>
      {/* Section container with ID and spacing */}
      <section id="products" className="max-container max-sm:mt-12">
        {/* Section heading and description */}
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red">Popular</span> Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value.
          </p>
        </div>
        {/* Responsive grid layout rendering product cards */}
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <>
              {/* Render individual product card */}
              <PopularProductCard key={product.name} {...product} />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
