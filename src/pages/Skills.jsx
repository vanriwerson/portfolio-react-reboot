import React, { Component } from "react";
import HardSkillCard from "../components/HardSkillCard/HardSkillCard";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import './Skills.css'

export default class Skills extends Component{
  render () {
    return(
      <section className="skills">
        <Header />
        <HardSkillCard />
        <Footer />
      </section>
    );
  }
}