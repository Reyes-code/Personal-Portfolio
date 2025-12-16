import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/fondo.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FiChevronsRight } from "react-icons/fi";




function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <b className="purple">Introducing Myself </b>
            </h1>
            <p className="home-about-body">
              Full-Stack Developer with 2+ years of experience building scalable
              web applications and robust data systems.{" "}
              <b className="purple">
                I build front-ends with React, JavaScript, and MUI, and develop
                back-end services and APIs using Django and Python.
              </b>{" "}
              My background in data engineering ensures the applications I
              create are powered by efficient data logic, automation, and solid
              data infrastructure.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
                    <Col md={6} className="text-center">
          <Button 
            as={Link} 
            to="/project"
            className="fork-btn-inner"
            >
            {" "}
            Go To My Projects
            <FiChevronsRight />
          </Button>
          </Col>
        </Row>
        <Row >
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Reyes-code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/santiago-reyes-223b17183/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
