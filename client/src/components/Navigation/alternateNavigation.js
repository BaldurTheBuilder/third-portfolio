//     A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
// WHEN I view the navigation titles I see the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
// WHEN I click on a navigation title I see the corresponding section below the navigation without the page reloading and that title is highlighted
// WHEN I view the navigation titles I see the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
import React from 'react';

const AlternateNavigation = ({currentPage, handlePageChange}) => {
    const links = [
        { href: "#", label: "Home"},
        { href: "#aboutMe", label: "About Me" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#resume", label: "Resume" },
      ];
    return (
        <ul className="navbar nav-tabs">
            {links.map((link) => (
          <li className="nav-item">
            <a
              href={link.href}
              onClick={() => handlePageChange(link.label)}
              className={currentPage === link.label ? 'nav-link active' : 'nav-link'}
            >
              {link.label}
            </a>
          </li>))}
        </ul>
      );
  };
  
  export default AlternateNavigation;