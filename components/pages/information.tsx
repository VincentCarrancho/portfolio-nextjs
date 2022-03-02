import { Title, Text, Button, Space } from "@mantine/core";
import React from "react";
import InformationStyling from "../../styles/informationStyling.module.css";

function InformationPage() {
  function onClickHandler(url: string): void {
    window.open(url, "_blank");
  }

  return (
    <div className={InformationStyling.background}>
      <img
        src="/images/icave_1.jpeg"
        alt="Background Image of Me"
        className={InformationStyling.backgroundImage}
      />
      <div className={InformationStyling.content}>
        <Title
          className="h1"
          order={1}
          sx={(theme) => ({
            color: "white",
            textShadow: "0.5px 0.5px 5px #F5FDFF, 0.5px 0.5px 5px #F5FDFF",
          })}
        >
          About
        </Title>
        <div>
          <Text className="p">
            I have experience in Mobile Development using Flutter and SwiftUI; I
            have experience in making websites using React.js (using Next.js and
            vanilla React), and I have project management experience with a few
            technical projects under my belt.
          </Text>
          <Text className="p">
            I am currently the SparkDev Program Manager in Upsilon Pi Epsilon
            (UPE) at Florida International University (FIU). I am responsible
            for overseeing a program in which we give students the opportunity
            to work on a STEM-based project for nine weeks. I am responsible for
            coordinating logistics, organizing events, leading my committee, and
            moderation of the program.
          </Text>
          <Text className="p">
            Now, I am interning at MetLife’s Technical University Program as a
            Project Manager due to the previous technical project management
            experience and team experience I have.
          </Text>
          <div className={InformationStyling.links}>
            <Button
              onClick={() => {
                onClickHandler("https://www.linkedin.com/in/vincentcarrancho/");
              }}
            >
              Linkedin
            </Button>
            <Button
              onClick={() => {
                onClickHandler("https://github.com/VincentCarrancho");
              }}
            >
              Github
            </Button>
            <Button
              onClick={() => {
                // TODO: put the most updated resume using my Google Drive
                onClickHandler("");
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
