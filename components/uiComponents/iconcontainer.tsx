import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
// TODO: figure out pixel dimensions for the svg
function IconContainer() {
  // Use props to pass in the styling of the elements

  const isVeryLargeDevice = useMediaQuery({ query: "(min-width: 1200px)" });
  const isLargeDevice = useMediaQuery({ query: "(min-width: 992px)" });
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmallDevice = useMediaQuery({ query: "(min-width: 600px)" });
  const isVerySmallDevice = useMediaQuery({ query: "(max-width: 600px)" });
  const isLandscape = useMediaQuery({ query: "(orientation: Landscape)" });

  const placeholder = <p>Placeholder</p>;

  // TODO: based on the media queries return the icons of sizes 150 100 75 50 30
  return <div></div>;
}

export default IconContainer;
