import {  useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      className="scrollToTop"
      variant="outline-secondary"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <i className="bi bi-arrow-up-square" />
    </Button>
  );
};
