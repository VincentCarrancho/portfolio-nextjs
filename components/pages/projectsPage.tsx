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
        <Text
          className="p"
          id="home_para"
          sx={(theme) => ({
            fontStyle: "italic",
            fontWeight: "500",
          })}
        >
          These are the projects that I decided to showcase. In every one of
          these projects, I have learned new things, challenged, myself, and
          solved many problems during its development period.
        </Text>
      </div>
      <div className={ProjectStyling.right}>
        {projectsData[0] == null ? (
          <div>
            <Title
              className="h1"
              order={1}
              sx={{
                color: "white",
                textShadow:
                  "0.2px 0.2px 1.5px #F5FDFF, 0.5px 0.5px 1.5px #F5FDFF",
              }}
            >
              Loading
            </Title>
            <Loader />
          </div>
        ) : (
          <div>
            <Accordion>
              {projectsData.map((project, index) => {
                // limits the amount of chars inside the project description to be 297.
                let projectDescription: string = project.projdesc;
                const length = 247;
                if (projectDescription.length > length) {
                  projectDescription = projectDescription.substring(0, length);
                  projectDescription += "...";
                }
                return (
                  <Accordion.Item
                    label={
                      <Text
                        className="p"
                        sx={{
                          color: "white",
                          textShadow:
                            "0.2px 0.2px 1.5px #F5FDFF, 0.5px 0.5px 1.5px #F5FDFF",
                        }}
                      >
                        {project.projname}
                      </Text>
                    }
                    key="project-accordion"
                  >
                    <Text
                      sx={{
                        fontSize: "16px",
                        color: "#9ae7f8",
                        filter: "blur(0.4px)",
                      }}
                    >
                      {projectDescription}
                    </Text>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        )}

        {/**
         * Below is just the tester button to make sure we have fetched the data
         */}
      </div>
    </div>
  );
}

export default ProjectsPage;
