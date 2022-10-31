import { Bottom } from "./Bottom/Bottom";
import "./footer.scss";
import { IconBoxes } from "./IconBoxes/IconBoxes";
import { Subscribe } from "./Subscribe/Subscribe";

export const Footer = () => {
  return (
    <div className="footer">
      <Subscribe />
      <Bottom />
      <IconBoxes />
    </div>
  );
};
