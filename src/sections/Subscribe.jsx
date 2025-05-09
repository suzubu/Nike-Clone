// === [ Subscribe Section ] ===
// A call-to-action form allowing users to subscribe to updates or a newsletter.
// Includes:
// - Section heading
// - Email input and sign-up button
// Responsive across mobile and desktop viewports.

import Button from "../components/button";

// Functional section definition
const Subscribe = () => {
  return (
    <>
      {/* Wrapper section with responsive layout for heading and form */}
      <section
        id='contact-us'
        className='max-container flex justify-between items-center max-lg:flex-col gap-10'
      >
        {/* Section heading with highlighted "Updates" keyword */}
        <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
          Sign Up for
          <span className='text-coral-red'> Updates </span>& Newsletter
        </h3>
        {/* Form wrapper with input and submit button, responsive layout */}
        <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
          {/* Email input field */}
          <input type='text' placeholder='subscribe@nike.com' className='input' />
          {/* Submit button aligned to right on small screens */}
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
            <Button label='Sign Up' fullWidth />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
