// src/components/Navbar/Navbar.jsx

import './Navbar.css';
import NavbarLink from '../NavbarLink/NavbarLink.jsx';

const Navbar = ({links}) => {
  return (
    // <nav id="top-navbar">
    //   <a href="/">Home</a>
    //   <a href="/about-us">About Us</a>
    //   <a href="/money-pit">Investment Opportunities</a>
    //   <a href="/the-fine-print">Terms of Service</a>
    // </nav>
    <nav id="top-navbar">
      {links.map(({href,text}, index) => (
        <NavbarLink key={index} href={href} text={text} />
      ))}
    </nav>
  );
};

export default Navbar;