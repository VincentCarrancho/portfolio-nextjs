import React from "react";

function ProjectPage(props: any) {
  let date = props.data;

  return (
    <div>
      <h1 className="projecttitle">{props.title}</h1>
      <h3 className="date">{props.date}</h3>
      <p className="projectdescription">{props.projectdescription}</p>
    </div>
  );
}

export default ProjectPage;
