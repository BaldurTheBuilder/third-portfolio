import React from 'react';
import ReactDOM from 'react-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// WHEN I am presented with the _____Portfolio_____ section I see titled images of six of the developer’s applications 
//      with links to both the deployed applications and the corresponding GitHub repository
// WHEN I am presented with the _____Contact______ section I see a contact form with fields for a name, an email address, and a message
//      WHEN I move my cursor out of one of the form fields without entering text I receive a notification that this field is required
//      WHEN I enter text into the email address field I receive a notification if I have entered an invalid email address

// The contact form should be similar to the one you built in the module project. Because this application doesn’t include a back end or connect to an API,
// you can set up this functionality the same way you did in the module project and add in back-end functionality after you’ve covered it in the next few weeks.
// In the meantime, consider adding your email address and phone number on the Contact page.

// Design
//     Use mobile-first design.
//     Uses reasonable font sizes/styles and colors to prevent eye strain.
//     Consider using animations and React component libraries.
//     Application deployed at live URL on GitHub Pages

// For each project you feature in your portfolio, you should include the following:
//     An image of the deployed application (either a GIF or a screenshot)
//     The title of the project
//     A link to the deployed application
//     A link to the corresponding GitHub repository