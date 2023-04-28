import React, { useState } from 'react'
import './Internship.css'
import Blok from './Blok'
import Select from 'react-select'

const Internship = () => {
    const [value,setValue]=useState(null)

    const aoi=[
        {label:"Drone Flight",value:"flight"},
        {label:"Drone Manufracture",value:"manufracture"},
        {label:"Drone Design",value:"design"},
        {label:"Drone Survey",value:"survey"},
    ]

    const location=[
        {label:"Mumbai",value:"mumbai"},
        {label:"Pune",value:"pune"},
        {label:"Nasik",value:"nasik"},
        {label:"Beed",value:"beed"},
    ]
  return (
    <div className="internship_p">
        <div className="filter">
        <div class="filterUi">
                <i class="fa-solid fa-filter"></i>
                <span id="filter_ui_heading_desktop" class="heading_6">Filters</span>
            </div>
            <div className="form">
                <form>
                <div className="inputs">
                <div className="f-dropdown">
      <Select options={aoi} defaultValue={value} placeholder="Area(s) of Interest" onChange={setValue} isMulti isSearchable/>
    </div>
                </div>
                <div className="inputs">
                <div className="f-dropdown">
      <Select options={location} defaultValue={value} placeholder="Preferred Location(s)" onChange={setValue} isMulti isSearchable/>
    </div>
                </div>
                {/* <div className="bodymain"> */}
    <div className="containerab">
  <ul className="ks-cboxtags">
    <li><input type="checkbox" id="checkboxOne" value="Rainbow Dash"/><label htmlFor="checkboxOne">Rainbow Dash</label></li>
    <li><input type="checkbox" id="checkboxTwo" value="Cotton Candy" /><label htmlFor="checkboxTwo">Cotton Candy</label></li>
    <li><input type="checkbox" id="checkboxThree" value="Rarity" /><label htmlFor="checkboxThree">Rarity</label></li>
    <li><input type="checkbox" id="checkboxFour" value="Moondancer"/><label htmlFor="checkboxFour">Moondancer</label></li>
    <li><input type="checkbox" id="checkboxFive" value="Surprise"/><label htmlFor="checkboxFive">Surprise</label></li>
    <li><input type="checkbox" id="checkboxSix" value="Twilight Sparkle"/><label htmlFor="checkboxSix">Twilight
                    Sparkle</label></li>
    <li><input type="checkbox" id="checkboxSeven" value="Fluttershy"/><label htmlFor="checkboxSeven">Fluttershy</label></li>
    <li><input type="checkbox" id="checkboxEight" value="Derpy Hooves"/><label htmlFor="checkboxEight">Derpy Hooves</label></li>
    <li><input type="checkbox" id="checkboxNine" value="Princess Celestia"/><label htmlFor="checkboxNine">Princess
                    Celestia</label></li>
    <li><input type="checkbox" id="checkboxTen" value="Gusty"/><label htmlFor="checkboxTen">Gusty</label></li>
    <li className="ks-selected"><input type="checkbox" id="checkboxEleven" value="Discord"/><label htmlFor="checkboxEleven">Discord</label></li>
    <li><input type="checkbox" id="checkboxTwelve" value="Clover"/><label htmlFor="checkboxTwelve">Clover</label></li>
    <li><input type="checkbox" id="checkboxThirteen" value="Baby Moondancer"/><label htmlFor="checkboxThirteen">Baby
                    Moondancer</label></li>
    <li><input type="checkbox" id="checkboxFourteen" value="Medley"/><label htmlFor="checkboxFourteen">Medley</label></li>
    <li><input type="checkbox" id="checkboxFifteen" value="Firefly"/><label htmlFor="checkboxFifteen">Firefly</label></li>
  </ul>

</div>
    {/* </div> */}
                
                </form>
            </div>

        </div>
        <div className="blogs example">
         <Blok/>
         <Blok/>
         <Blok/>
         <Blok/>
         <Blok/>
        </div>
    </div>
  )
}

export default Internship