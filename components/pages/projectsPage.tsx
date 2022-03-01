import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { Title, Text, Accordion, Button, Loader } from "@mantine/core";
import ProjectStyling from "../../styles/projectStyling.module.css";

function ProjectsPage() {
  const [projectsData, setProjectsData] = useState<any[]>([null]);

  var isLoaded: boolean = false;

  useEffect(() => {
    sanityClient
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

    isLoaded = true;
  }, []);

  return (
    <div className={ProjectStyling.background}>
      <div className={ProjectStyling.left}>
        <Title
          className="h1"
          order={1}
          sx={(theme) => ({
            color: "white",
            textShadow: "0.5px 0.5px 5px #F5FDFF, 0.5px 0.5px 5px #F5FDFF",
          })}
        >
          Projects
        </Title>
        <Text className="p">
          These are the projects that I decided to showcase. In every one of
          these projects, I have learned new things, challenged, myself, and
          solved many problems during its development period.
        </Text>
      </div>
      <div className={ProjectStyling.right}>
        {projectsData[0] == null ? (
          <div>
            <h1 className="h1">Loading</h1>
            <Loader />
          </div>
        ) : (
          <div>
            <Accordion>
              {projectsData.map((project, index) => {
                // limits the amount of chars inside the project description to be 297.
                let projectDescription: string = project.projdesc;
                const length = 297;
                projectDescription = projectDescription.substring(0, length);
                projectDescription += "...";
                return (
                  <Accordion.Item
                    label={<Text className="p">{project.projname}</Text>}
                    key="project-accordion"
                  >
                    <Text>{projectDescription}</Text>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        )}

        {/**
         * Below is just the tester button to make sure we have fetched the data
         */}
        <Button
          onClick={() => {
            console.log(projectsData[0].projdesc);
          }}
        >
          Test
        </Button>
      </div>
    </div>
  );
}

export default ProjectsPage;
