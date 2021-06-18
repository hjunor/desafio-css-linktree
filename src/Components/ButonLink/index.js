import React from "react";

import { GetLink } from "./styles";

const ButtonLink = ({
  color,
  href,
  name,
  handler,
  type,
  width,
  height,
  min_width,
  background,
}) => {
  return (
    <GetLink
      target="_blank"
      min_width={min_width}
      width={width}
      height={height}
      href={href}
      color={color}
      background={background}
    >
      {name}
    </GetLink>
  );
};

export default ButtonLink;
