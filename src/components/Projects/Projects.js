import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recipes from "../../Assets/Projects/recipespng.png";
import tinder from "../../Assets/Projects/tinderpng.png";
import pancoquito from "../../Assets/Projects/pancoquitopng.png";
import microsleep from "../../Assets/Projects/microsleep.png";
import movies from "../../Assets/Projects/moviespng.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies"
              description="Movies, is a full-stack web application designed to showcase the latest cinematic releases. The project features a responsive React frontend coupled with a custom Node.js (Express) backend server, demonstrating a clear separation of concerns and modern API consumption practices."
              ghLink="https://github.com/Reyes-code/Movies"
              demoLink="https://moviesofsantiagoreyes.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinder}
              isBlog={false}
              title="Tinder Clone"
              description="It is a responsive web application that mirrors the Tinder experience, built with a focus on a dynamic React frontend. It features a swipeable card interface, real-time chat, and a responsive design that works seamlessly across devices"
              ghLink="https://github.com/Reyes-code/TinderClone"
              demoLink="https://tinderclonesantiagoreyes.netlify.app/"           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pancoquito}
              isBlog={true}
              title="Pancoquito CRM" 
              description="A full-stack Django application for production orders and operations management. Features a Python backend with PostgreSQL database, responsive frontend with HTML5, CSS3, JavaScript, Bootstrap and containerized deployment using Docker with GitHub Actions CI/CD."
              ghLink="https://github.com/Reyes-code/sistema_pancoquito"
              demoLink="https://pancoquito-sistema.onrender.com/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipes}
              isBlog={true}
              title="Recipe App"
              description="Is a responsive recipe discovery app built with React. Swipe through beautiful recipe cards to save your favorites, explore detailed cooking instructions, and build your personal collection. The frontend is designed to connect with a custom Node.js and MongoDB backend for storing recipes and user data."
              ghLink="https://github.com/Reyes-code/mern_recipes_app" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microsleep}
              isBlog={false}
              title="Sleep Detection"
              description="This sleep detection app uses computer vision to monitor eye activity in real-time through a webcam. Built with Python, OpenCV, and MediaPipe, it tracks facial landmarks to detect blinks and identify micro-sleeps when eyes remain closed too long."
              ghLink="https://github.com/Reyes-code/sleep_detection.githttps://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
