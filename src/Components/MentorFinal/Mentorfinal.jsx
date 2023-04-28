import React, { useState } from "react";
import "./Mentorfinal.css";

import { AiFillStar } from "react-icons/ai";
import { BsFillChatTextFill } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BiBadgeCheck } from "react-icons/bi";
import Select from "react-select";

const Mentorfinal = () => {
  const [value, setValue] = useState(null);

  const aoi = [
    { label: "Drone Flight", value: "flight" },
    { label: "Drone Manufracture", value: "manufracture" },
    { label: "Drone Design", value: "design" },
    { label: "Drone Survey", value: "survey" },
  ];
  return (
    <div>
      <div className="mf-maindiv">
        <div className="mf-filterdiv">
          <h3>Choose Expertise</h3>
          <div className="containerab">
            <ul className="ks-cboxtags">
              <li>
                <input type="checkbox" id="checkboxOne" value="Rainbow Dash" />
                <label htmlFor="checkboxOne">Rainbow Dash</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxTwo" value="Cotton Candy" />
                <label htmlFor="checkboxTwo">Cotton Candy</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxThree" value="Rarity" />
                <label htmlFor="checkboxThree">Rarity</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxFour" value="Moondancer" />
                <label htmlFor="checkboxFour">Moondancer</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxFive" value="Surprise" />
                <label htmlFor="checkboxFive">Surprise</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSix"
                  value="Twilight Sparkle"
                />
                <label htmlFor="checkboxSix">Twilight Sparkle</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxSeven" value="Fluttershy" />
                <label htmlFor="checkboxSeven">Fluttershy</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxEight"
                  value="Derpy Hooves"
                />
                <label htmlFor="checkboxEight">Derpy Hooves</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxNine"
                  value="Princess Celestia"
                />
                <label htmlFor="checkboxNine">Princess Celestia</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxTen" value="Gusty" />
                <label htmlFor="checkboxTen">Gusty</label>
              </li>
              <li className="ks-selected">
                <input type="checkbox" id="checkboxEleven" value="Discord" />
                <label htmlFor="checkboxEleven">Discord</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxTwelve" value="Clover" />
                <label htmlFor="checkboxTwelve">Clover</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxThirteen"
                  value="Baby Moondancer"
                />
                <label htmlFor="checkboxThirteen">Baby Moondancer</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxFourteen" value="Medley" />
                <label htmlFor="checkboxFourteen">Medley</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxFifteen" value="Firefly" />
                <label htmlFor="checkboxFifteen">Firefly</label>
              </li>
            </ul>
          </div>
        </div>

        <div className="mf-mentorbox example">
          <div className="mf-searchflex">
            <div className="mf-searchbox">
              <Select
                options={aoi}
                defaultValue={value}
                placeholder="Area(s) of Interest"
                onChange={setValue}
                isMulti
                isSearchable
              />
            </div>
            <div className="mf-searchbox1">
              <Select
                options={aoi}
                defaultValue={value}
                placeholder="Area(s) of Interest"
                onChange={setValue}
                isSearchable
              />
            </div>
          </div>
          <div className="mpro">
            <div className="mpro1">
              <div className="mpro1-img">
                <img
                  src="https://www.betterup.com/hubfs/Portrait-of-young-woman-employee-getting-fired-from-work-signs-you-are-being-pushed-out-of-your-job.jpg"
                  alt=""
                />
              </div>

              <div className="mpro1-txt">
                <span className="mpro1-fees"> $166</span> /Month
              </div>
            </div>

            <div className="mpro2">
              <div className="mpro2-name">Anna Kotliarevskaia</div>
              <div className="mpro2-job">
                Senior Software Engineer at <span>Square</span>
              </div>
              <div className="mpro2-exp">
                9+ years of experience in Front End Engineering
              </div>

              <div className="mpro2-rating">
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star monroe" /> 5.0{" "}
                <span className="mpro2-rev">(16 reviews)</span>{" "}
              </div>

              <div className="mpro2-services">
                <span className="mpro2-serv">
                  <BsFillChatTextFill /> Chat
                </span>
                <span className="mpro2-serv">
                  <MdCall />
                  Call
                </span>
                <span className="mpro2-serv">
                  <BiBadgeCheck />
                  Hands-on
                </span>
                <span className="mpro2-serv">
                  <BiBadgeCheck />
                  Tasks
                </span>
              </div>

              <div className="mpro2-para">
                I am a Front End Software Engineer with over 9 years of
                experience at various tech companies, currently based in
                Toronto, Canada. I am currently working at Square and was
                previously at Coinbase, Taplytics. I also mentor at Lighthouse
                Labs: Canada's Leading Coding Bootcamp on the side. I have
                professional, …
              </div>

              <div className="mpro2-speciality">
                <div className="mpro2-spec">Engineering & Data</div>
                <div className="mpro2-spec">Frontend</div>
                <div className="mpro2-spec">Javasript</div>
                <div className="mpro2-spec">React</div>
              </div>

              <div className="mpro2-btn">Arrange Session</div>
            </div>
          </div>

          <div className="mpro">
            <div className="mpro1">
              <div className="mpro1-img">
                <img
                  src="https://www.betterup.com/hubfs/Portrait-of-young-woman-employee-getting-fired-from-work-signs-you-are-being-pushed-out-of-your-job.jpg"
                  alt=""
                />
              </div>

              <div className="mpro1-txt">
                <span className="mpro1-fees"> $166</span> /Month
              </div>
            </div>

            <div className="mpro2">
              <div className="mpro2-name">Anna Kotliarevskaia</div>
              <div className="mpro2-job">
                Senior Software Engineer at <span>Square</span>
              </div>
              <div className="mpro2-exp">
                9+ years of experience in Front End Engineering
              </div>

              <div className="mpro2-rating">
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star" />
                <AiFillStar className="mpro2-star monroe" /> 5.0{" "}
                <span className="mpro2-rev">(16 reviews)</span>{" "}
              </div>

              <div className="mpro2-services">
                <span className="mpro2-serv">
                  <BsFillChatTextFill /> Chat
                </span>
                <span className="mpro2-serv">
                  <MdCall />
                  Call
                </span>
                <span className="mpro2-serv">
                  <BiBadgeCheck />
                  Hands-on
                </span>
                <span className="mpro2-serv">
                  <BiBadgeCheck />
                  Tasks
                </span>
              </div>

              <div className="mpro2-para">
                I am a Front End Software Engineer with over 9 years of
                experience at various tech companies, currently based in
                Toronto, Canada. I am currently working at Square and was
                previously at Coinbase, Taplytics. I also mentor at Lighthouse
                Labs: Canada's Leading Coding Bootcamp on the side. I have
                professional, …
              </div>

              <div className="mpro2-speciality">
                <div className="mpro2-spec">Engineering & Data</div>
                <div className="mpro2-spec">Frontend</div>
                <div className="mpro2-spec">Javasript</div>
                <div className="mpro2-spec">React</div>
              </div>

              <div className="mpro2-btn">Arrange Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorfinal;
