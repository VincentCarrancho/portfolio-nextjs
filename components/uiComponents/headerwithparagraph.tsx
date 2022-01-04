import React from "react";

function HeaderAndPara(props: any) {
  const para = props.paragraph;
  const uppercase = para.toUpperCase();
  return (
    <div>
      <h2>{props.header}</h2>
      <p>{uppercase}</p>
    </div>
  );
}

export default HeaderAndPara;
