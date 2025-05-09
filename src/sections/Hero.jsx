// === [ Hero Section ] ===
// The main landing section showcasing a highlighted Nike shoe with dynamic image switching.
// Includes:
// - Intro text and call-to-action button
// - Animated product statistics
// - Large shoe image with selectable thumbnails

import { useState } from "react";
import Button from "../components/button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

// Functional section definition
const Hero = () => {
  // Track the currently selected large shoe image
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <>
      {/* Section wrapper: responsive flex layout with intro + image sides */}
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        {/* Left: Intro content including headline, paragraph, CTA button, and stats */}
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
          {/* Highlighted tag line */}
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer Collection
          </p>
          {/* Hero headline with styled line breaks */}
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3">Nike </span>{" "}
            Shoes
          </h1>
          {/* Supporting paragraph description */}
          <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort and innovation for
            you active life.
          </p>
          {/* Call-to-action button linking to product section */}
          <Button label="Shop Now" iconURL={arrowRight} />
          {/* Display dynamic product statistics from constants */}
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Right: Large shoe image with thumbnail selector */}
        <div className="relative flex-1 flex justify-center items-center xl: min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
          {/* Currently selected main shoe image */}
          <img
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-container relative z-10"
          />
          {/* Thumbnail selection row — click to change large image */}
          <div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] maxx-sm: px-6">
            {shoes.map((shoe) => (
              <div key={shoe}>
                {/* ShoeCard component with image switching behavior */}
                <ShoeCard
                  imgURL={shoe}
                  changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
