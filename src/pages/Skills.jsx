import React, { Component } from "react";
import hardSkillsList from '../data/hardSkillsList';
import HardSkillCard from "../components/HardSkillCard/HardSkillCard";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import './Skills.css'

export default class Skills extends Component{
  render () {
    return(
      <section className="skills">
        <Header />
        <div className="hard-skills-container">
          {hardSkillsList.map(({ id, imgUrl, techName, techDescription }) => (
            <HardSkillCard
              key={ id }
              imgUrl={ imgUrl }
              techName={ techName }
              techDescription={ techDescription }
            />
          ))}
        </div>
        <Footer />
      </section>
    );
  }
}