import React from "react";

import profilePicture from "../assets/profilePicture.jpg";

// current problem: the footer is covering content due to it being fixed-bottom. There are possible flexbox solutions, as well as coding the page css, which is currently blank. I played around with adding a margin-bottom, but it's not working right.

export default function Home() {
  return (
    <div className="container">
      <div className="col-md-5 m-5 mb-10 float-end">
        <h4>Home</h4>
        <p>
          Welcome to my portfolio! I’m a prospective web developer based in the
          Portland metro area. Please explore the site! If you want to contact
          me, you can access my information on the profile page.
        </p>
      </div>
      <div className="col-md-5 mt-5 float-start">
        <embed src={profilePicture} className="mw-5 img-fluid"></embed>
      </div>
    </div>
  );
}
