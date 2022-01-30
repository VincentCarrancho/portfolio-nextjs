import { useState } from "react";
import Link from "next/link";
import { Url } from "url";

// TODO: do not reveal description. Instead make a custom page for each of the things
// TODO: in the future

function ProjectCard(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  let data = props.data; // This is the straight data from request.

  /* return (
    <div className={props.ProjectCardStyle}>
      <h2 id={props.fontcolor}>{props.projname}</h2>
      <h3 id={props.fontcolor}>{props.dateofproj}</h3>
      <img src={props.image} alt="" />
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <h3>Read More</h3>
      </button>
      {isExpanded && (
        <div>
          <p id={props.fontcolor}>{props.projdesc}</p>
          <p>
            <a href={props.url}></a>
          </p>
        </div>
      )}
    </div>
  ); */
  return (
    <div
      className={props.ProjectCardStyle}
      onClick={() => {
        let githubLink: string = props.git;
        window.open(githubLink, "_blank");
      }}
    >
      <h2 id={props.projectHeading}>{props.projname}</h2>
      <h3 id={props.projectSubheading}>{props.dateofproj}</h3>
    </div>
  );
}

export default ProjectCard;
