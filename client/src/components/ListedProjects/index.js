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
            <div className="row justify-content-md-center">

              {projects.map(project => (
                <div className="col-md-4 mb-4">
                <ProjectCard key={project.id} project={project}/>
                </div>
              ))}

            </div>
          </div>
        </div>
      );
    }
  
  export default ListedProjects;