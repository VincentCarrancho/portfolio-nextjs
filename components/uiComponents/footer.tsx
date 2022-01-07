import React from "react";
import FooterStyle from "../../styles/footerstyle.module.css";

// TODO: add the a tag for each of the hyperlinks
function Footer() {
  return (
    <div className={FooterStyle.footercontainer}>
      <div className={FooterStyle.topdiv}>
        <div id={FooterStyle.hyperlinks}>
          <p id={FooterStyle.topdivtext}>ABOUT | PROJECTS | CONTACT</p>
        </div>
      </div>
      <div className={FooterStyle.bottomdiv}>
        <div className={FooterStyle.iconcontainer}>
          <p id={FooterStyle.topdivtext}>
            <a href="https://github.com/VincentCarrancho">GITHUB</a> |{" "}
            <a href="https://www.linkedin.com/in/vincentcarrancho/">LINKEDIN</a>{" "}
            | <a href="mailto:vcarr048@fiu.edu">EMAIL</a>
          </p>
        </div>
        <p id={FooterStyle.copyright}>@COPYRIGHT. ALL RIGHTS RESERVED</p>
        <p id={FooterStyle.copyright}>LAST UPDATED: 1/7/2022</p>
      </div>
    </div>
  );
}

export default Footer;
