import React from "react";
import ResumeDoc from "../../documents/Resume.pdf";
import '../../styles/resume.css'

//TODO: adjust stack order (responsive UI design)
function Resume() {
  return (
    <div className="d-flex row">
      <embed src={ResumeDoc} width="100%" height="1000px" className="col-lg-9"/>
      <div className="card cust-card col-lg-3">
        <div className="card-header" id="proficiencies"><h3>Proficiencies</h3></div>
        <h5 className="card-title">Programming Languages</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">Python</li>
          <li className="list-group-item">C#</li>
        </ul>

        <h5 className="card-title">Back End</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">MySQL, Sequelize</li>
          <li className="list-group-item">MongoDB, Mongoose</li>
          <li className="list-group-item">Express</li>
          <li className="list-group-item">Node.js</li>
          <li className="list-group-item">Restful APIs</li>
          <li className="list-group-item">GraphQL</li>
        </ul>

        <h5 className="card-title">Front End</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">React</li>
          <li className="list-group-item">DOM Manipulation</li>
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">jQuery</li>
          <li className="list-group-item">Responsive Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
