import React from 'react';
import Navigation from "./Navigation";
import '../styles/Header.css';

const Header = ({currentPage, handlePageChange}) => {
    return (
    <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 ">
                    {/*WHEN I view the header I see the developer's name and navigation with titles corresponding to different sections of the portfolio */}
                    <h3>Jack Kok-Carlson</h3>
                </div>

                <div className="col-lg-6 col-sm-12">
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
                </div>
            </div>
        </div>
    </header>
    );
  };
  
  export default Header;