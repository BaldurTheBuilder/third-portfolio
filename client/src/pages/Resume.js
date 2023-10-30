import React from "react";

import myResume from "../assets/JackResume2023Tech.pdf";

// WHEN I am presented with the ____Resume_____ section I see a link to a downloadable resume and a list of the developer’s proficiencies
// resume link needs to be fixed
// page should include a copy of the resume in text form
export default function Resume() {
  return (
    <div className="p-3">
      <h3>Resume</h3>
      <p>Please use the following link to access my resume: </p>
      <a href={myResume} download>
        My Resume
      </a>

      <div className="ratio ratio-1x1">
        <embed src={myResume} width="700px" height="1050px" />
      </div>
    </div>
  );
}
