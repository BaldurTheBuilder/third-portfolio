import React from 'react';
import '../styles/Page.css';

// WHEN I am presented with the About Me section I see a recent photo or avatar of the developer and a short bio about them
// about me should include a profile picture, paragraph of information, and links to social media in a footer.
// as always, page container includes the navbar and header.
export default function AboutMe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h4>About Me </h4>
                    <p>
                    I am an Oregonian web developer with a deep-seeded interest in creating applications with user-friendly experiences. 
                    I recently graduated from the University of Oregon’s coding bootcamp, which has given me a solid foundation in full stack development. 
                    In fact, the culmination of our work in the bootcamp was a dynamic MERN stack website, which my team built from the ground up. 
                    Outside of my professional work, I am deeply passionate about music. I studied music in college, and have a bachelor’s in choral music education. 
                    I also enjoy spending time with friends exploring oldschool roleplaying games such as second edition AD&D, Classic Traveller, and GURPS. 
                    </p>
                </div>
                <div className="col-6">
                </div>
            </div>
        </div>
    );
}