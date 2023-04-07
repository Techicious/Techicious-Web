import React from "react";

import Title from "react-vanilla-tilt";
// import vid from "../resources/mov_bbb.mp4";
import img from "../Assets/client1.png";
import { useEffect } from "react";

function ShowcaseParalexCard(props) {
  var r = document.querySelector(":root");
  const scrollvalue = props.scroll - props.initval;
  {
    if (scrollvalue < 900) {
      r.style.setProperty("--rotatex", `${0}deg`);
      r.style.setProperty("--imagescrolly", `${0}%`);
      r.style.setProperty("--rotatey", `${0}deg`);
      r.style.setProperty("--transformx", `${0}px`);
      r.style.setProperty("--scale", `${1}`);
      r.style.setProperty("--scrollbarwidth", `10px`);
      r.style.setProperty("--transition", `.1s linear`);
    }
    if (scrollvalue >= 900) {
      r.style.setProperty("--scrollbarwidth", `0px`);
      r.style.setProperty("--imagescrolly", `${-scrollvalue / 80 + 11}%`);
      r.style.setProperty("--transition", `.1s linear`);

      r.style.setProperty("--rotatex", `${scrollvalue / 300 - 2}deg`);
      r.style.setProperty("--rotatey", `${-scrollvalue / 300 - 2}deg`);
      r.style.setProperty("--transformx", `${-scrollvalue / 10 + 100}%`);
      r.style.setProperty("--scale", `${0.6 + scrollvalue / 2000}`);
    }
    // paused state

    if (scrollvalue >= 2780) {
      r.style.setProperty("--rotatex", `${scrollvalue / 800}deg`);
      r.style.setProperty("--rotatey", `${scrollvalue / 800}deg`);
      r.style.setProperty("--transformx", `${scrollvalue / 5 - 700}%`);
      r.style.setProperty("--scale", `${-scrollvalue / 3000 + 3}`);
      r.style.setProperty("--transition", `.1s linear`);
    }
    // paused state
    if (scrollvalue >= 4200) {
      r.style.setProperty("--transition", `1s linear`);
      r.style.setProperty("--rotatex", `${0}deg`);
      r.style.setProperty("--rotatey", `${0}deg`);
      r.style.setProperty("--scale", `${1}`);
      r.style.setProperty("--transformx", `${0}%`);
    }
    if (scrollvalue >= 4200 && scrollvalue <= 5400) {
      r.style.setProperty("--transition", `.3s linear`);
      r.style.setProperty("--rotatex", `${0}deg`);
      r.style.setProperty("--scale", `${1.4}`);
      r.style.setProperty("--transformx", `${0}px`);
    }
    if (scrollvalue >= 6650) {
      r.style.setProperty("--scrollbarwidth", `10px`);
    }
  }

  useEffect(() => {
    // var vid = document.getElementById("videop");
    // vid.currentTime = (props.scroll - (props.startval + 100)) / 600;
  }, [props.scroll, props.startval]);

  return (
    <div
      className="thisOne"
      id="fixed"
      style={{
        gap: 40,
        top: 0,
        left: 0,
        position: props.scroll > 900 ? "fixed" : "sticky",
        opacity: props.scroll > props.trigerval && "1",
        display:
          props.scroll < props.trigerval
            ? "none"
            : props.scroll > props.endval
            ? "none"
            : "flex",
      }}
    >
      <Title className="titlehover" loop>
        <div className="tab">
          <div className="innerbox" id="inn">
            <img id="myimage" src={img} />
          </div>
        </div>
      </Title>

      <Title className="titlehover2" loop>
        {/* <video id="videop">
          <source src={vid} type="video/mp4" />
        </video> */}
        <div className="mobile">
          <div className="innerbox" id="inn">
            <img id="myimage" src={img} />
          </div>
        </div>
      </Title>
    </div>
  );
}

export default ShowcaseParalexCard;
