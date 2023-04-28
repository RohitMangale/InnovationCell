import React from "react";
import './MentorWho.css'

const MentorWho = () => {
  return (
    <div className="mentorwho">
      <div className="mw-left">
        <h1 className="mw-heading">Who Can Become a Mentor?</h1>
        <p>
          MAARG Program by Startup India invites experts to register and provide
          guidance to startups throughout the year.
          MAARG Program by Startup India invites experts to register and provide
          guidance to startups throughout the year.
        </p>
        <div className="mw-buttons">
            <div className="mw-btn1">
                Mentor Application
            </div>
            <div className="mw-btn2">
                Am I ELigible?
            </div>
        </div>
      </div>
      <div className="mw-right">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-working-on-presentation-3474701-2928587.png" />
      </div>
    </div>
  );
};

export default MentorWho;
