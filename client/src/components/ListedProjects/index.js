import React from "react";
import ProjectCard from "../ProjectCard";

function ListedProjects({projects}) {
    if (!projects.length) {
      return <h3>No Projects Yet</h3>;
    }
      return (
        <div className="project-feed-container">
          <h1 className="project-feed-title">Projects Component</h1>
          <div className="project-cards-container">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </div>
        </div>
      );
    }
    
  
  export default ListedProjects;