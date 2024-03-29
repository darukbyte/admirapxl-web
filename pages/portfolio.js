import React, { useEffect } from "react";
import { gsap } from "gsap";
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
import { Projects } from "../components/Projects";
import { ProjectsTwo } from "../components/ProjectsTwo";
import { Titles } from "../components/Titles";
import { Paragraph } from "../components/Paragraph";

function Portfolio() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    opacity: 0,
    y: -30,
    ease: "elastic.out",
  });

  ScrollTrigger.defaults({
    start: "top 98%",
    toggleActions: "restart none none none",
  });
  useEffect(() => {
    gsap.from(".grid-one", {
      delay: 0.3,
      duration: 3,
      scrollTrigger: { trigger: ".grid-one" },
    });
    gsap.from(".grid-two", {
      delay: 0.6,
      duration: 2.8,
      scrollTrigger: { trigger: ".grid-two" },
    });
    gsap.from(".grid-three", {
      delay: 0.9,
      duration: 2,
      scrollTrigger: { trigger: ".grid-three" },
    });
    gsap.from(".grid-four", {
      delay: 0.9,
      duration: 2,
      scrollTrigger: { trigger: ".grid-four" },
    });
  }, []);

  return (
    <section className="portfolio padding">
      <Titles title="Portfolio" />
      <Paragraph content="These projects help me to learn and improve more my frontend developer skills." />
      <section className="portfolio-projects">
        <div className="grid-one gridded">
          <Projects
            image="https://d33wubrfki0l68.cloudfront.net/616cbed5fe4d44e8064753aa/screenshot_2021-10-18-00-26-01-0000.png"
            title="JuniorHub"
            content="This App shows you the user information and their repositories, consulting the GitHub API, using async functions to get a more synchronous code, and the React Hooks useState to handle the information and states."
            urlRepo="https://github.com/admiralpxl/JuniorHub"
            urlWeb="https://juniorhub.netlify.app/"
            techno="REACT | useState | async - await"
          />
        </div>
        <div className="grid-two gridded">
          <ProjectsTwo
            image="https://d33wubrfki0l68.cloudfront.net/6101f5088f644325dbbcb25a/screenshot_2021-07-29-00-23-41-0000.png"
            title="The Lion´s Song"
            content="This is a redesign of the landing page of The Lion´s Song Game by Mi'pu'mi Games, I made the design on Figma, practice my knowledge of transform, transition, and animation property of CSS also uses Vanilla Javascript for made more dynamic the page, the design it is optimized for mobile, tablet and Desktop."
            urlRepo="https://github.com/admiralpxl/lion-song-redesign"
            urlWeb="https://lionsonggameredesign.netlify.app/"
            techno="SASS | CSS | VANILLA JAVASCRIPT"
          />
        </div>
        <div className="grid-three gridded">
          <Projects
            image="https://d33wubrfki0l68.cloudfront.net/611194b1dce5780008b8329e/screenshot_2021-08-09-20-48-53-0000.png"
            title="Forescast Today App"
            content="A beautiful and minimalist weather app, made with pure HTML, CSS, and Vanilla Javascript, the app use OpenWeather API to get the information and show it through DOM manipulation and using AJAX template."
            urlRepo="https://github.com/admiralpxl/ForescastTodayApp"
            urlWeb="https://forescasttodayapp.netlify.app/"
            techno="Vanilla Javascript | DOM | API Rest"
          />
        </div>
        <div className="grid-four gridded">
          <ProjectsTwo
            image="https://d33wubrfki0l68.cloudfront.net/60a17f064fde3d000776fcf7/screenshot_2021-05-16-20-22-35-0000.png"
            title="INTERACTIVE PRICE SELECTOR"
            content="This is a interactive price component make with SASS and Javascript, I also practice array and manipule DOM elements like the input range and check boxs."
            urlRepo="https://github.com/admiralpxl/interactive-pricing-page"
            urlWeb="https://price-interactive.netlify.app/"
            techno="SASS | CSS | JAVASCRIPT"
          />
        </div>
      </section>
      <style jsx>{`
        @media (min-width: 768px) {
          .portfolio-projects {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 56px 1fr 56px 1fr;
            grid-gap: 24px;
          }
          .gridded {
            max-width: 1000px;
            justify-self: center;
          }
          .grid-one {
            grid-column: 1;
          }
          .grid-two {
            grid-column: 2;
            grid-row: 2;
          }
          .grid-three {
            grid-column: 1;
            grid-row: 3;
          }
          .grid-four {
            grid-column: 2;
            grid-row: 4;
          }
        }
        @media (min-width: 1040px) {
          .portfolio-projects {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
          }
          .grid-one {
            grid-column: 1;
            grid-row: 1;
          }
          .grid-two {
            grid-column: 1;
            grid-row: 2;
          }
          .grid-three {
            grid-column: 1;
            grid-row: 3;
          }
          .grid-four {
            grid-column: 1;
            grid-row: 4;
          }
        }
      `}</style>
    </section>
  );
}

export default Portfolio;
