import React from "react";
import {NavLink} from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";

function Projects() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
     <h2 className="projects_css"> <a href="https://github.com/AshuraZor0/ByteWizard_Study-Buddy" style={{ textDecoration: 'none',color: 'white', textAlign: 'center' }}>Study 
     Buddy</a></h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h2 className="projects_css"> <a href="https://www.google.com" style={{ textDecoration: 'none',color: 'white', textAlign: 'center' }}>Disease Detector</a></h2>
      </Col>
      
      
      
    </Row>
  );
}

export default Projects;
