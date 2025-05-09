// === [ ReviewCard Component ] ===
// Displays a customer testimonial card with avatar, feedback, rating, and name.
// Props:
// - imgURL: customer photo
// - customerName: name of the reviewer
// - rating: numeric score (shown with star icon)
// - feedback: review text

import { star } from "../assets/icons";

// Functional component definition
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Customer profile image */}
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      {/* Review text */}
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      {/* Star rating with icon and number */}
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      {/* Customer name */}
      <h3 className="mt-1 font-palanquin text-3xl text-center font-boldw">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
