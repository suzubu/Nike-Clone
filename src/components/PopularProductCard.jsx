// === [ PopularProductCard Component ] ===
// A reusable product card displaying an image, rating, title, and price.
// Props:
// - imgURL: product image URL
// - name: product name
// - price: product price

import { star } from "../assets/icons";

// Functional component definition
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      {/* Product image */}
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      {/* Rating row with star icon and static value */}
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      {/* Product name */}
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      {/* Product price */}
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2 leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
