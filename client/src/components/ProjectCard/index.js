//     A single Project component that will be used multiple times in the Portfolio section
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProjectCard(props) {
  const project = props.project;

  return (
    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{project.projectTitle}</Card.Title>
          <Card.Text>{project.briefDescription}</Card.Text>
          <Card.Img src={project.image} alt={`image for ${project.projectTitle}`}/>
        </Card.Body>
      </Card>
      <div
        className="mask"
        style={{
          backgroundColor: "rgba(42, 42, 42, 0.6)",
        }}
      >
        <div className="container align-items-center">
          <div className="row">
            <Button className="btn btn-primary" href={project.repoLink}>
              View Repository
            </Button>
            <Button href={project.liveLink}>View Live Site</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

// For each project you feature in your portfolio, you should include the following:
//     An image of the deployed application (either a GIF or a screenshot)
//     The title of the project
//     A link to the deployed application
//     A link to the corresponding GitHub repository

/*
intended functionality:
--once enough projects are added with a variety of techUsed tags, viewers can search by tag.
--a simple drop-down selector will change which cards show up.
--the cards are organized by date completed/worked on.
--There is room for four "featured" projects to appear before the regular cards.
--for now, this information will have to be added manually. Eventually it would be good to check the github API for figuring out when the last pull request on a project was.

--cards are displayed in a grid on the portfolio screen.
--each card shows a title at the top, an image, and the project's brief description.
--when the card is floated over, a brief blur animation occurs.
--once complete, the github link appears at the top under the hypertext name "repo link"
--if applicable, the live site link appears just below this with the name "live site"
--under this and over the greyed out image, the longDescription for the project appears.
--   I need to figure out a character limit for the long descriptions, based on the size of the cards.

// For each project you feature in your portfolio, you should include the following:
//     An image of the deployed application (either a GIF or a screenshot)
//     The title of the project
//     A link to the deployed application
//     A link to the corresponding GitHub repository

*/

//{key, task}
// const project = props.project;
//   <div>
//   <h3>{project.title}</h3>
//   <p>{project.description}</p>
//   <p>Current Funding: ${project.currentFunding}</p>
//   <button>View Task</button>
// </div>
//   <div class="card">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

//   </div>
// </div>
// <a href="#" class="card-link">Card link</a>
// <a href="#" class="card-link">Another link</a>
