import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bottom } from "./Bottom";
import { IconBoxes } from "./IconBoxes";
import { Subscribe } from "./Subscribe";

export const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <Subscribe />
        <Bottom />
        <IconBoxes />
        <div className="social-module">
          <a
            href="https://www.instagram.com/boettcher_ag"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="instagram" />
          </a>
          <a href="/" target="_blank" rel="noreferrer noopener">
            <span className="twitter" />
          </a>
          <a
            href="https://www.youtube.com/user/BueromarktBoettcher"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="youtube" />
          </a>
          <a
            href="https://www.facebook.com/BueromarktBoettcherAG"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="facebook" />
          </a>
        </div>
        <div className="site-copyright">
          <p>
            Copyright 2022 © Soroush Safarkhah. All rights reserved. Powered by{" "}
            <a
              href="https://sorousch9.github.io/safarkhah/"
              target="_blank"
              rel="noreferrer noopener"
              className="safarkhah"
            >
              .
            </a>
          </p>
          <Link to="/" className="redirect">
            zum Privatkundenshop
          </Link>
        </div>
      </div>
    </Container>
  );
};
