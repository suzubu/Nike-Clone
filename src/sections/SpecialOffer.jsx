// === [ SpecialOffer Section ] ===
// A promotional split-section highlighting a limited-time offer.
// Includes:
// - Left: large product image
// - Right: title, descriptive paragraphs, and two action buttons

import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/button";

// Functional section definition
const SpecialOffer = () => {
  return (
    <>
      {/* Section wrapper with image and text side-by-side, responsive on smaller screens */}
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        {/* Left column: promotional image */}
        <div className="flex-1 ">
          <img
            src={offer}
            alt=""
            width={773}
            height={687}
            className="object-container w-full"
          />
        </div>
        {/* Right column: heading, paragraphs, and CTA buttons */}
        <div className="flex flex-1 flex-col">
          {/* Section heading with highlighted "Special" word */}
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            <span className="text-coral-red"> Special </span>
            Offer
          </h2>
          {/* First paragraph describing the offer */}
          <p className="mt-4 lg:max-w-lg info-text">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selection to incredible savings we
            offer unparalleled value that sets us apart
          </p>
          {/* Second paragraph with extended message */}
          <p className="mt-6 lg:max-w-lg info-text">
            Naviafate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
          {/* Call-to-action buttons: "Shop now" and "Learn more" */}
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label="Shop now" iconURL={arrowRight} />
            <Button
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
