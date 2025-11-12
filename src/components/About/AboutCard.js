import React from "react";
import Card from "react-bootstrap/Card";
import { FaAnglesDown } from "react-icons/fa6";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Full-Stack Developer with 2+ years of experience building scalable
            web applications and robust data systems.{" "}
            <b className="purple">
              I build front-ends with React, JavaScript, and MUI, and develop
              back-end services and APIs using Django and Python.
            </b>{" "}
            My background in data engineering ensures the applications I create
            are powered by efficient data logic, automation, and solid data
            infrastructure.
          </p>
          <ul>
            <li className="about-activity">
              <FaAnglesDown /> For more Information, Scroll Down
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
