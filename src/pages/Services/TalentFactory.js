import React from "react";
import img1 from "../../Assets/talentfactory.png";

const TalentFactory = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="mw">
      <div className="pagemargin">
        <div className="aboutlanding">
          <div className="aboutlanding_left">
            <img src={img1} alt="about us" width={400} />
          </div>
          <div className="aboutlanding_right">
            <div className="title">
              <h1>Talent Factory</h1>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt placeat unde architecto. Natus corporis optio minima
                atque accusamus, iusto error. Optio suscipit dolorum voluptatem.
                Quia facere officiis molestias praesentium recusandae et dolores
                quas omnis deserunt sit. Eos, officiis libero voluptas nesciunt
                maxime, impedit excepturi aliquid voluptatem incidunt error
                provident ab.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutdetails"></div>
      </div>
    </div>
  );
};

export default TalentFactory;
