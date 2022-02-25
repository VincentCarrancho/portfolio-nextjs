import React, { useEffect } from "react";
import { Button, Title, Text, useMantineTheme, Space } from "@mantine/core";
import HomeStyling from "../../styles/home.module.css";
import Layout from "../../styles/layout.module.css";

function Homepage() {
  const theme = useMantineTheme();

  return (
    <div className={HomeStyling.background}>
      <div className={Layout.homelayout}>
        {/* <h1 className={TextStyling.Title}>Vincent Carrancho</h1> */}
        <Title
          className="h1"
          order={1}
          sx={(theme) => ({
            color: "white",
            textShadow: "0.5px 0.5px 5px #F5FDFF, 0.5px 0.5px 5px #F5FDFF",
          })}
        >
          Vincent Carrancho
        </Title>
        <div className={Layout.home}>
          <Text
            className="p"
            align="justify"
            // @ts-ignore
            color={theme.colors.skyblue}
            sx={(theme) => ({})}
          >
            Project Management Intern at Metlife’s Technical University (MTU).
            Computer Science Student @ Florida International University; Class
            of 2024
          </Text>
          {/* <h3 className={TextStyling.subTitle}>
              Project Management Intern at Metlife’s Technical University (MTU).
              Computer Science Student @ Florida International University; Class of
              2024
            </h3> */}
        </div>
        <Space h={"lg"} />
        <div className={HomeStyling.buttonwrapper}>
          <Button
            sx={{}}
            radius={"sm"}
            // @ts-ignore
            color={theme.colors.skyblue}
            variant="filled"
            size="xl"
            onClick={() => {
              window.open("mailto:vincentcarrancho@gmail.com", "_blank");
            }}
          >
            Contact
          </Button>
          <Space h={"lg"} />
          <Button
            sx={{}}
            radius={"sm"}
            // @ts-ignore
            color={theme.colors.skyblue}
            variant="outline"
            size="xl"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/vincentcarrancho/",
                "_blank"
              );
            }}
          >
            Linkedin
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
