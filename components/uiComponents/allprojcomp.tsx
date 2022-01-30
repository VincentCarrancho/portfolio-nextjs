import { useEffect, useState } from "react";
import sanityClient from "../client";
import ProjectStyling from "../../styles/projectcard.module.css";
import ProjectCard from "./individualcard";

// TODO: Work on styling the cards with CSS grid and make it responsive

export default function AllProjects(props: any) {
  const [ProjectsData, setProjectsData] = useState<any[]>([null]); // for some reason this implementation of useState with a null array worked
  let isLoaded = true;
  useEffect(() => {
    let proj = sanityClient
      .fetch(
        `*[_type == "project"]{
      projname,
      dateofproj,
      image,
      projdesc,
      url
    }`
      )
      .then((data) => setProjectsData(data))
      .catch(console.error);

    isLoaded = true; // calls the setProjects data to update the state
  }, []);

  if (ProjectsData[0] == null) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    return (
      <div className={ProjectStyling.uiwrapper}>
        {isLoaded && (
          <section className={ProjectStyling.projectwrapper}>
            {ProjectsData &&
              ProjectsData.map((project, index) => (
                <ProjectCard
                  ProjectCardStyle={ProjectStyling.projectcard}
                  projectHeading={ProjectStyling.projectHeading}
                  projectSubheading={ProjectStyling.projectSubheading}
                  projname={project.projname}
                  dateofproj={project.dateofproj}
                  projdesc={project.projdesc}
                  git={project.url}
                />
              ))}
          </section>
        )}
      </div>
    );
  }
}
