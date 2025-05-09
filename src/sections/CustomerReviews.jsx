// === [ CustomerReviews Section ] ===
// Displays a section featuring testimonials from customers using the ReviewCard component.
// Maps over the reviews array and renders each one in a responsive layout.

import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

// Functional section definition
const CustomerReviews = () => {
  return (
    <section className="max-container">
      {/* Section title with highlighted "Customers" keyword */}
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say
      </h3>
      {/* Subheading encouraging trust and storytelling */}
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from ur satisfied customers about their exceptional
        experiences with us.
      </p>
      {/* Responsive flex container displaying individual ReviewCards */}
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
