import React from 'react';
import '../styles/Page.css';

// WHEN I access the admin page if I'm not logged in I'm rerouted to the login page. If I'm logged in, I can create new projects and edit current projects.
// as always, page container includes the navbar and header.
export default function Admin() {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-6 mt-5">
                    <h4>Admin </h4>
                    <p>
                        Hello, Jack! Use this page to upload new projects and edit current projects.
                    </p>
                </div>
            </div>
        </div>
    );
}