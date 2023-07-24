import React from 'react';
// should include a series of project cards
import ProjectCard from '../components/ProjectCard/ProjectCard'
// each card includes a small image of the project, the title, a brief description, and a link to either the live project or the github repository.


export default function Portfolio() {
    return (
        <div>
            <ProjectCard></ProjectCard>
        <p>Portfolio Page</p>
        </div>
    );
}