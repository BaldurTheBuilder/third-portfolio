import React from "react";

//home page includes brief intro paragraph, nav links, and header with my name.

export default function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <h4>Home</h4>
          <p >
            Welcome to my portfolio! I’m a prospective web developer based in
            the Portland metro area. Please explore the site! If you want to
            contact me, you can access my information on the profile page.
          </p>
        </div>
      </div>
    </div>
  );
}
