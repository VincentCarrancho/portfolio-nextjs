import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import {
  Title,
  Text,
  Accordion,
  Button,
  Loader,
  AccordionItem,
} from "@mantine/core";

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
    <div>
      <div>
        <Title>Projects</Title>
        <Text>
          These are the projects that I decided to showcase. In every one of
          these projects, I have learned new things, challenged, myself, and
          solved many problems during its development period.{" "}
        </Text>
      </div>
      <div>
        {/**
         * Figure how to do this
         */}

        {projectsData[0] == null ? (
          <h1>null</h1>
        ) : (
          <div>
            <Accordion>
              {projectsData.map((project, index) => {
                return (
                  <Accordion.Item
                    label={project.projname}
                    key="project-accordion"
                  >
                    <Text>{project.projdesc}</Text>
                  </Accordion.Item>
                );
              })}
              {/* <Accordion.Item label={projectsData[0].projname}></Accordion.Item>
              <Accordion.Item label={projectsData[1].projname}></Accordion.Item>
              <Accordion.Item label={projectsData[2].projname}></Accordion.Item> */}
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
