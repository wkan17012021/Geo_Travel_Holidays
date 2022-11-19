import React from "react";

// https://bobbyhadz.com/blog/react-toggle-class-on-click

const FlexPanel = () => {
  const handleToggle = (event) => {
    event.currentTarget.classList.toggle("open");
    event.currentTarget.classList.toggle("open-active");
  };

  return (
    <div id="panels" className="panels">
      <div
        onClick={handleToggle}
        className="panel panel1"
        title="Rock cavern construction, Hong Kong"
      >
        <p>Pushing</p>
        <p>Engineering</p>
        <p>Boundaries</p>
      </div>
      <div
        onClick={handleToggle}
        className="panel panel2"
        title="Bryce Canyon, Utah, USA"
      >
        <p>Greater</p>
        <p>Exploration</p>
        <p>Depths</p>
      </div>
      <div
        onClick={handleToggle}
        className="panel panel3"
        title="Yellowstone Artist Point, Wyoming, USA"
      >
        <p>Earth's</p>
        <p>Art</p>
        <p>Studio</p>
      </div>
      <div
        onClick={handleToggle}
        className="panel panel4"
        title="Mount Batuur, Bali, Indonesia"
      >
        <p>Curiosity</p>
        <p>Discovery</p>
        <p>Adventure</p>
      </div>
      <div
        onClick={handleToggle}
        className="panel panel5"
        title="Skogafoss Waterfall, Iceland"
      >
        <p>Dreams</p>
        <p>Inspiration</p>
        <p>Reality</p>
      </div>
    </div>
  );
};

export default FlexPanel;
