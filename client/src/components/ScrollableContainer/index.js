import React, { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";

function ScrollableContainer({ children, itemWidth }) {
  const containerRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const firstItem = container.querySelector(".user-card"); // Assuming a class name for UserCard
      if (firstItem) {
        itemWidth = firstItem.offsetWidth; // Calculate item width
      }

      const isScrollable = container.scrollWidth > container.clientWidth;
      setScrollable(isScrollable);
    }
  });

  const handleScrollLeft = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 10; // Adjust the scroll amount as needed
      const interval = 5; // Milliseconds between each step of the animation
      let distance = 0;

      const scrollInterval = setInterval(() => {
        if (distance >= 2 * itemWidth) {
          clearInterval(scrollInterval);
        } else {
          container.scrollLeft -= scrollAmount;
          distance += scrollAmount;
        }
      }, interval);
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 10; // scroll amount
      const interval = 5; // Milliseconds between each step of the animation
      let distance = 0;

      const scrollInterval = setInterval(() => {
        if (distance >= 2 * itemWidth) {
          clearInterval(scrollInterval);
        } else {
          container.scrollLeft += scrollAmount;
          distance += scrollAmount;
        }
      }, interval);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {scrollable && (
        <IconButton onClick={handleScrollLeft}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <div
        ref={containerRef}
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "1rem",
        }}
      >
        {children}
      </div>
      {scrollable && (
        <IconButton onClick={handleScrollRight}>
          <ArrowForwardIcon />
        </IconButton>
      )}
    </div>
  );
}

ScrollableContainer.defaultProps = {
  itemWidth: 175,
};

ScrollableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ScrollableContainer;
