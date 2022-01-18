import { useEffect, useState } from "react";
import sanityClient from "../client";

// TODO: Fix expansion of the cards to isolate only one.
// TODO: Fix problem in which the

export default function AllProjects(props: any) {
  const [ProjectsData, setProjectsData] = useState<any[]>([null]); // for some reason this implementation of useState with a null array worked
  const [isExpanded, setIsExpanded] = useState(false);

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
      <div>
        <h2 id={props.fontcolor}>All Projects (CMS TEST)</h2>
        {ProjectsData &&
          ProjectsData.map((project, index) => (
            <div key={index + project.projname}>
              <h2 id={props.fontcolor}>{project.projname}</h2>
              <h3 id={props.fontcolor}>{project.dateofproj}</h3>
              <img src={project.image} alt="" />
              <button
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
              >
                <h3>Read More</h3>
              </button>
              {isExpanded && (
                <div>
                  <p id={props.fontcolor}>{project.projdesc}</p>
                  <p>
                    <a href={project.url}></a>
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
}
