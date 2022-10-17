import React from "react";
import ResumeDoc from "../../Documents/Resume.pdf";
import '../../styles/resume.css'

//TODO: add more proficiencies
//TODO: adjust stack order (responsive UI design), improve colors
function Resume() {
  return (
    <div class="d-flex">
      <embed src={ResumeDoc} width="100%" height="1000px" />
      <div class="card cust-card">
        <div class="card-header">Proficiencies</div>
        <h5 class="card-title">Programming Languages</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">JavaScript</li>
          <li class="list-group-item">Python</li>
          <li class="list-group-item">C#</li>
        </ul>

        <h5 class="card-title">Back End</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">MySQL</li>
          <li class="list-group-item">NoSQL</li>
        </ul>

        <h5 class="card-title">Front End</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">React</li>
          <li class="list-group-item">Node.js</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
