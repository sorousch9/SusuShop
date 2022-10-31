import { Bottom } from "./Bottom/Bottom";
import "./footer.scss";
import { IconBoxes } from "./IconBoxes/IconBoxes";
import { Subscribe } from "./Subscribe/Subscribe";

export const Footer = () => {
  return (
    <div>
      <Bottom />
      <IconBoxes />
      <Subscribe />
    </div>
  );
};
