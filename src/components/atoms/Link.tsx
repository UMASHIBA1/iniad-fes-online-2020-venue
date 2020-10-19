import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

function Link(props: Props) {
  return(
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
}

export default Link
