import type { NextPage } from "next";
import Homepage from "components/pages/homepage";
import InformationPage from "components/pages/information";
import { MantineProvider } from "@mantine/core";
import ProjectsPage from "components/pages/projectsPage";

// Make sure the css from the above is consistent with the other css

const Home: NextPage = () => {
  return (
    <div className="root">
      <MantineProvider
        theme={{
          colors: {
            backgroundGradient: ["#2B798A", "#51276B", "#213C5C"], // Blue, Purple, Dark Blue
            darkBackgroundGradient: ["#3D3A20", "#230E2D", "#30131A"], // Dark Gold, Dark Purple, Dark Pink
            skyblue: ["#9AE7F8"],
          },
        }}
      >
        <Homepage />
        <InformationPage />
        <ProjectsPage />
      </MantineProvider>
    </div>
  );
};

export default Home;
