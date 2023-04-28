import React from "react";
import "./Game.css";

import { SlNote } from "react-icons/sl";
import { BsFillPinAngleFill } from "react-icons/bs";
import { AiOutlineFileProtect } from "react-icons/ai";
// import Superb from '../../assets/superb.jpeg'

const Game = () => {
  return (
    <div className="ga-con">
      <div className="game">
        <div className="g-left">
          <img
            src="https://www.droneblog.com/wp-content/uploads/2022/04/How-to-Fly-a-Drone-droneblog-1-1-720x720.jpg"
            className="appear"
          ></img>
          <img
            src="https://thumbs.dreamstime.com/b/group-persons-making-drone-training-course-la-juliana-aerodrome-seville-spain-may-skydive-spain-skydiving-center-76886703.jpg"
            className="disappear"
          ></img>
        </div>

        <div className="g-right">
          <h2 className="g-heading">Up your work game, it’s free.</h2>

          <div className="g-box">
            <div className="gcon">
              <SlNote />
              <div className="g-jugad"></div>
            </div>
            <div className="g-text">
              <h4>No cost to join.</h4>
              <p>
                Register and browse professionals, explore projects, or even
                book a consultation.
              </p>
            </div>
          </div>

          <div className="g-box">
            <div className="gcon">
              <BsFillPinAngleFill />
              <div className="g-jugad"></div>
            </div>
            <div className="g-text">
              <h4>No cost to join.</h4>
              <p>
                Register and browse professionals, explore projects, or even
                book a consultation.
              </p>
            </div>
          </div>

          <div className="g-box">
            <div className="gcon">
              <AiOutlineFileProtect />
              <div className="g-jugad"></div>
            </div>
            <div className="g-text">
              <h4>No cost to join.</h4>
              <p>
                Register and browse professionals, explore projects, or even
                book a consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
