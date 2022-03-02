import { Button, Title, Text, useMantineTheme, Space } from "@mantine/core";
import Image from "next/image";
import HomeStyling from "../../styles/home.module.css";

function Homepage() {
  const theme = useMantineTheme();

  return (
    <div className={HomeStyling.background}>
      <img
        src="/images/img.JPG"
        alt="Background Image of Me"
        className={HomeStyling.backgroundImage}
      />
      <div className={HomeStyling.content}>
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
        <div>
          <Text
            className="p"
            id="home_para"
            align="justify"
            // @ts-ignore
            color={theme.colors.skyblue}
            sx={(theme) => ({
              fontStyle: "italic",
              fontWeight: "500",
            })}
          >
            Project Management Intern at Metlife’s Technical University (MTU).
            Computer Science Student and SparkDev Program Manager @ Florida
            International University–Class of 2024.
          </Text>
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
