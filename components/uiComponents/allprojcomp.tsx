import { useEffect, useState } from "react";
import sanityClient from "../client";
import ProjectStyling from "../../styles/projectcard.module.css";
import ProjectCard from "./individualcard";

// TODO: Work on styling the cards with CSS grid and make it responsive

export default function AllProjects(props: any) {
  const [ProjectsData, setProjectsData] = useState<any[]>([null]); // for some reason this implementation of useState with a null array worked

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
      .catch(console.error); // calls the setProjects data to update the state
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
        <h2 id={props.fontcolor}>All Projects (CMS TEST)</h2>
        <section className={ProjectStyling.projectwrapper}>
          {ProjectsData &&
            ProjectsData.map((project, index) => (
              <ProjectCard
                fontcolor={ProjectStyling.fontcolor}
                projname={project.projname}
                dateofproj={project.dateofproj}
                projdesc={project.projdesc}
                url={project.url}
              />
            ))}
        </section>
      </div>
    );
  }
}
