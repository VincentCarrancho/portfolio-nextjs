import { useState } from "react";

// TODO: destructure incoming data using the props

function ProjectCard(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
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
  );
}

export default ProjectCard;
