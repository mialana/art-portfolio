import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Experience.css";

import { Container } from "@material-ui/core";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Container className="experience" id="experience">
        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Experience;
