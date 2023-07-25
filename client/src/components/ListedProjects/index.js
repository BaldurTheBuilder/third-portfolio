import React from "react";
import ProjectCard from "../ProjectCard";

function ListedProjects({projects}) {
    if (!projects.length) {
      return <h3>No Projects Yet</h3>;
    }
      return (
        <div className="project-feed-container m-3">
          <h1 className="project-feed-title p-3">Projects</h1>
          <div className="project-cards-container">
            <div className="row">

              {projects.map(project => (
                <div className="col-md-4 col-sm-6 mb-4">
                <ProjectCard key={project.id} project={project}/>
                </div>
              ))}

            </div>
          </div>
        </div>
      );
    }
  
  export default ListedProjects;