// === [ Button Component ] ===
// A flexible, styled button used throughout the site.
// Props:
// - label: button text
// - iconURL: optional icon to display after the label
// - backgroundColor, textColor, borderColor: Tailwind utility strings for styling
// - fullWidth: boolean to apply full width styling if true

// Functional component definition
const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <>
      {/* Button element with dynamic class handling for style and layout */}
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}

        {/* Optional icon element, rendered if iconURL is provided */}
        {iconURL && (
          <img
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full bg-white w-5 h-5"
          />
        )}
      </button>
    </>
  );
};

export default Button;
