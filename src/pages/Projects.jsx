import React, { Component } from "react";
import projectsList from '../data/projectsList';
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import ProjectCard from '../components/ProjectCard/ProjectCard';
import './Projects.css';

export default class Projects extends Component{
  render () {
    return(
      <section className="projects">
        <Header />
        <h1>Conheça alguns de meus Projetos</h1>
        <div className="projects-wrapper">
          {
            projectsList.map(({ id, imgUrl, linkToProject, projectName, projectDescription }) => (
              <ProjectCard
                key={ id }
                imgUrl={ imgUrl }
                linkToProject={ linkToProject }
                projectName={ projectName }
                projectDescription={ projectDescription }
              />
            ))
          }
        </div>
        <Footer />
      </section>
    );
  }
}