// === [ Nav Component ] ===
// Renders the main navigation header for the site.
// Includes logo, center-aligned nav links, and a hamburger menu for smaller screens.
// Responsive behavior hides nav links and shows hamburger on small viewports.

import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

// Functional component definition
const Nav = () => {
  return (
    <>
      {/* Wrapper header with padding and positioning */}
      <header className="padding-x py-8 absolute z-10 w-full">
        {/* Flex container for logo, nav links, and mobile menu icon */}
        <nav className="flex justify-between items-center max-container">
          {/* Logo linked to home page */}
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>
          {/* Centered navigation links (hidden on small screens) */}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {/* Render each nav item from navLinks constant */}
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="fonts-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Hamburger icon for small screen menu */}
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
