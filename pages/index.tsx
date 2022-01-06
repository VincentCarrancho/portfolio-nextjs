import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import HeaderAndPara from "../components/uiComponents/headerwithparagraph";
import LandingStyle from "../styles/landingpage.module.css";
import IconContainer from "components/uiComponents/iconcontainer";
import Footer from "components/uiComponents/footer";

// Make sure the css from the above is consistent with the other css

const Home: NextPage = () => {
  // After deployment, seperate each section into its own component
  // Create mobile site
  return (
    <div className="root">
      <Head>
        <title>Vincent Carrancho</title>
        <meta
          name="Vincent Carrancho"
          content="Vincent Carrancho Personal Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={LandingStyle.home}>
          <div>
            <h1 className={LandingStyle.welcomeTitle}>Vincent Carrancho</h1>
            <p className={LandingStyle.welcomeSubtitle}>
              AN ASPIRING SOFTWARE ENGINEER THAT SEEKS TO FIND THE BEST SOLUTION
              TO PROBLEMS. CURRENTLY, I AM LOOKING FOR OPPORTUNITIES TO DO
              FRONT-END AND MOBILE DEVELOPMENT.
            </p>
            <IconContainer />
          </div>
        </div>
        {/* TODO: I need to format this page and update the id/class tags */}
        <div className={LandingStyle.information}>
          <div className={LandingStyle.bottomInfo}>
            <p>
              CURRENTLY, I AM A SOPHOMORE STUDYING COMPUTER SCIENCE AT FLORIDA
              INTERNATIONAL UNIVERSITY (FIU).{" "}
              <span id="p_seriff">
                A PROGRAM MANAGER AT UPSILON PI EPSILON FOR SPARKDEV
              </span>
              , I HAVE EXPERIENCE IN TEAM LEADING AND MANAGEMENT AS WELL AS
              STRONG TECHNICAL SKILLS.{" "}
              <span id="p_seriff">
                MY INTERESTS ARE NATIVE AND CROSS PLATFORM MOBILE DEVELOPMENT
                USING FLUTTER AND SWIFT UI; AND FRONTEND DEVELOPMENT.
              </span>
            </p>
          </div>
          <div id="info-topleft">
            <HeaderAndPara
              header="Education"
              paragraph="Florida International University (2024); B.S in Computer Science; GPA: 3.85/4.00"
            />
            <HeaderAndPara
              header="Programming Languages"
              paragraph="Java, Python, Dart, Swift, C++, Javascript, HTML, CSS"
            />
            <HeaderAndPara
              header="Relevant Coursework"
              paragraph="Programming 1&2 (Java), Discrete Math, Calculus 1-3"
            />
          </div>
          <div id="info-image">
            {/*
            TODO: Import image
            */}
          </div>
        </div>
        <div className={LandingStyle.yellowbody}>
          <div className={LandingStyle.projects}>
            <div className={LandingStyle.projectTextWrapper}>
              <h1 id={LandingStyle.projectscontactfontcolor}>My Projects</h1>
              <p id={LandingStyle.projectSubtitle}>
                <Link href="/projects">
                  <a id={LandingStyle.projectSubtitle}>
                    CLICK TO VIEW MY PROJECTS
                  </a>
                </Link>
                . THESE ARE THE PRIOJECTS THAT I HAVE SELECTED THAT I FEEL BEST
                REPRESENTS MY BEST QUALITY AND WORK.
              </p>
            </div>
          </div>
          <div className={LandingStyle.contact}>
            <div>
              <h1 id={LandingStyle.projectscontactfontcolor}>Contact</h1>
              <p id={LandingStyle.contactSubtitle}>
                I WILL TRY TO GET BACK AT YOU IN A TIMELY MANNER. PLEASE MESSAGE
                ME IF YOU HAVE ANY INQUIRES.
              </p>
              <p id={LandingStyle.contactSubtitle_email}>
                PREFERRED:{" "}
                <a
                  href="mailto:vcarr048@fiu.edu"
                  id={LandingStyle.projectscontactfontcolor}
                >
                  VCARR048@FIU.EDU
                </a>
              </p>
              <p id={LandingStyle.contactSubtitle_email}>
                SECONDARY:{" "}
                <a
                  href="mailto:vincentcarrancho@gmail.com"
                  id={LandingStyle.projectscontactfontcolor}
                >
                  VINCENTCARRANCHO@GMAIL.COM
                </a>
              </p>
              <p id={LandingStyle.contactSubtitle_linkedin}>
                CONNECT WITH ME ON{" "}
                <a
                  href="https://www.linkedin.com/in/vincentcarrancho/"
                  id={LandingStyle.projectscontactfontcolor}
                >
                  LINKEDIN
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
