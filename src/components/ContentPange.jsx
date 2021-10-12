import React from "react";
import "../App.css";

import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
function ContentPange() {
  const [imageType, setImage] = useState(
    "https://img.icons8.com/fluency/240/000000/clock--v1.png"
  );
  return (
    <div style={{ display: "flex" }}>
      <div className="div-left">
        <div className="clock-images">
          <ul className="ul-images">
            <li>
              <img
                className="img-Clock-image"
                src="https://img.icons8.com/ios-filled/250/000000/clock--v2.png"
                onClick={() => {
                  setImage(
                    "https://img.icons8.com/ios-filled/250/000000/clock--v2.png"
                  );
                }}
              />
            </li>

            <li>
              <img
                className="img-Clock-image"
                src="https://img.icons8.com/fluency/240/000000/clock--v1.png"
                onClick={() => {
                  setImage(
                    "https://img.icons8.com/fluency/240/000000/clock--v1.png"
                  );
                }}
              />
            </li>

            <li>
              <img
                className="img-Clock-image"
                src="https://img.icons8.com/fluency/240/000000/clock--v1.png"
                onClick={() => {
                  setImage(
                    "https://img.icons8.com/fluency/240/000000/clock--v1.png"
                  );
                }}
              />
            </li>
          </ul>
        </div>

        <div className="div-left-bottom"></div>
      </div>

      <div className="div-right">
        <div className="div-clockbox">
          <img className="img-Clock" src={imageType} />
        </div>
        <div className="div-clockName">
          <h2 className="h2_price"> $ 150 </h2>

          <div className="clockName">
            <h1 className="clockNameH2">Mono Clock</h1>
            <p className="p_clockinfo">
              Created by japanese designer 'Kuchi Nata'. The mono-clock is a
              simple yet striking Timepiece. The perfectly black and white,
              Along with the contrasting give this clock a classic view
            </p>

            <div className="div-color-pane">
              <div className="div-colorpicker">
                <h2 className="h2_color"> Color</h2>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="secondary"
                    style={{ backgroundColor: "#343a40" }}
                    onClick={() => {
                      setImage(
                        "https://img.icons8.com/ios-filled/250/000000/clock--v2.png"
                      );
                    }}
                  >
                    Black
                  </Button>
                  <Button
                    variant="secondary"
                    style={{ backgroundColor: "#e9ecef", color: "black" }}
                    onClick={() => {
                      setImage(
                        "https://img.icons8.com/fluency/240/000000/clock--v1.png"
                      );
                    }}
                  >
                    White
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPange;
