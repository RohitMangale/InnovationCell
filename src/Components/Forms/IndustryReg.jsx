import React from "react";
import "./Forms.css";

const Student = () => {
  return (
    <div>
      <div className="f-box">
        <h1>Industry Registration</h1>
        


        <div className="f-onerow">
          <input type="text" placeholder="Company ID" required />
          <input type="text" placeholder="Organisation Name" required />
        </div>

        {/* <div className="f-onerow">
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Mobile Number" required />
        </div> */}
        {/* <div className="f-margintop">
        <label htmlFor="gender">Select Gender</label>
        <div className="f-radio">
            
            <div className="f-rr">
            <input type="radio" id="male" name="gender" value="Male" className="custom-radio"/>
            <label for="Male">Male</label></div>
            <div className="f-rr">
            <input type="radio" id="female" name="gender" value="Female" className="custom-radio"/>
            <label for="Female">Female</label></div>
            <div className="f-rr">
            <input type="radio" id="other" name="gender" value="Other" className="custom-radio"/>
            <label for="Other">Other</label>  </div>  
        </div>
        </div> */}
        {/* <div className="f-margintop1">
        <div className="f-tworow">
          <label htmlFor="course">Last Passed Course</label>
          <select name="course" id="course" required>
            <option value="Default">Last Passed Course</option>
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
            <option value="Doctorate">Doctorate</option>
            <option value="Other">Other</option>
          </select>
        </div>
        </div> */}
        
        <div className="f-onerow">
          <input type="email" placeholder="Enter Email" required />
          <input type="tel" placeholder="Mobile Number" required />
        </div>

        <div className="f-margintop">
        <label htmlFor="gender">Company Registration Certificate</label>
        <div className="f-radio">
            <input type="file" />           
        </div>
        </div>


        <div className="f-onerow">
          <input type="text" placeholder="State" required />
          <input type="text" placeholder="City" required />
        </div>

        <div className="f-onerow">
          <input type="text" placeholder="First Name of person filling form" required />
          <input type="text" placeholder="Last Name of person filling form" required />
        </div>

        
        
        {/* <div className="f-testarea">
            <textarea name="prof-bg" cols="10" rows="10" placeholder="Brief description of the project idea"></textarea>
        </div> */}

        <div className="f-onerow">
          <input type="password" placeholder="Enter Password" required />
        </div>
      </div>
    </div>
  );
};

export default Student;
