import React from "react";
import Link from "next/link";

function projects() {
  return (
    <div>
      <head>
        <title>Vincent Carrancho: Projects</title>
        <meta
          name="Vincent Carrancho Projects"
          content="The projects that I have worked on."
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div>
        <h1>
          <Link href="/">
            <a>Under Construction!</a>
          </Link>
        </h1>
        <h2>
          THIS PORTION OF THE WEBSITE IS UNDER CONSTRUCTION. HOWEVER, IF YOU
          WANT TO SEE SOME OF THE PROJECTS THAT I HAVE WORKED ON, YOU CAN GO TO
          MY GITHUB REPOSITORY HERE AND CHECK OUT SOME OF THE PROJECTS I HAVE
          AVAILABLE PUBLICALLY. IF YOU WANT TO SEE MY RESUME,{" "}
          <a href="https://github.com/VincentCarrancho">CLICK HERE.</a>
        </h2>
      </div>
    </div>
  );
}

export default projects;
