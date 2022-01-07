import React from "react";
import Style from "../../styles/iconButtonStyles.module.css";

function IconButton(props: any) {
  return (
    <div>
      <div className={Style.body}>
        <div id={Style.icon_large}>
          {
            // This is for the larger Icon. Using CSS breakpoints to conditionally render
          }
        </div>
        <div id={Style.icon_medium}>
          {
            // if viewport is with in the min and max render
          }
        </div>
        <div id={Style.icon_small}>
          {
            // if viewport is with in the min and max render
          }
        </div>
      </div>
    </div>
  );
}

export default IconButton;
