import React from 'react'
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar";
import appData from '../../data/app.json'
import ProjectDetails2Header from "../../components/Project-details2-header";
import ProjectDetails2Introduction from "../../components/Project-details2-introduction";
import ProjectDetails2Images from "../../components/Project-details2-images";
import ProjectDetailsDescription from "../../components/Project-details-description";
import ProjectDetailsVideo from "../../components/Project-details-video";
import NextProject from "../../components/Next-project";
import SmallFooter from "../../components/Small-footer";

const ProjectDetails2Light = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);
    React.useEffect(() => {
      var navbar = navbarRef.current,
        logo = logoRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
          logo.setAttribute("src", appData.darkLogo);
        } else {
          navbar.classList.remove("nav-scroll");
          logo.setAttribute("src", appData.lightLogo);
        }
      });
    }, [navbarRef]);
    return (
      <LightTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <ProjectDetails2Header />
        <ProjectDetails2Introduction />
        <ProjectDetails2Images />
        <ProjectDetailsDescription />
        <ProjectDetailsVideo
          videoBackground="/img/portfolio/project2/bg.jpg"
          videoType="youtube"
          videoId="h4PzIZYuRyw"
        />
        <NextProject
          projectImage="/img/portfolio/project1/bg.jpg"
          projectTitle="Natural plus modern."
        />
        <SmallFooter />
      </LightTheme>
    );
}

export default ProjectDetails2Light
