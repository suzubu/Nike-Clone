// === [ ShoeCard Component ] ===
// A clickable shoe thumbnail card that highlights selection state.
// Props:
// - imgURL: object containing 'thumbnail' and 'bigShoe' image URLs
// - changeBigShoeImage: function to update the currently displayed large shoe image
// - bigShoeImg: currently active large shoe image (used to determine selection state)

// Functional component definition
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  // Handles click to change the main big shoe image if not already selected
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      {/* Inner container with background and shoe thumbnail image */}
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
        {/* Thumbnail image representing the shoe option */}
      </div>
    </div>
  );
};

export default ShoeCard;
