// === [ SuperQuality Section ] ===
// A two-column section promoting the premium quality of the product.
// Includes:
// - Left: title, description text, and a CTA button
// - Right: product image
import { shoe8 } from "../assets/images";
import Button from "../components/button";

// Functional section definition
const SuperQuality = () => {
  return (
    <>
      {/* Section layout with responsive column flow and spacing */}
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        {/* Left column: title, supporting paragraphs, and CTA button */}
        <div className="flex flex-1 flex-col">
          {/* Section heading with styled keywords */}
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide You
            <span className="text-coral-red"> Super </span>
            <span className="text-coral-red">Quality </span>
            Shoes
            <br />
          </h2>
          {/* First supporting paragraph */}
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          {/* Second supporting paragraph */}
          <p className="mt-6 lg:max-w-lg info-text">
            Our dedication to detail and excellence ensures your satisfaction.
          </p>
          {/* Call-to-action button */}
          <div className="mt-11">
            <Button label="View Details" />
          </div>
        </div>

        {/* Right column: product image display */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="shoe8"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default SuperQuality;
