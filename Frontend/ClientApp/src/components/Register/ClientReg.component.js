import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import  {ClientRegistration}  from '../../authorization/authorization';

const ClientRegister = () => {
  const [formData, setFromData] = useState(
    {
        ClientNIC: '',
        FirstName: '',
        LastName: '',
        Address: '',
        UserName: '',
        Email: '',
        MobileNo: '',
        Password: '',
        ConfirmPassword: '',
    });

  const {ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password,  ConfirmPassword} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit = async e => {
  e.preventDefault();
  console.log("On Submit Function is working")
   ClientRegistration (ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password, ConfirmPassword);
    


};

  return (
    <Fragment>

      <form  onSubmit={e => onSubmit(e)}>
        
      <h3  className="testClass" >CLIENT REGISTRATION </h3>
         <h3 className="form_text">Create a new account</h3>
           
 
        <div className="form-group">
          <small className="form_text">Client NIC Number</small>
          <input className="font_size"
            type="text"
            placeholder="ClientNIC"
            name="ClientNIC"
            value={ClientNIC}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <small className="form_text">First Name</small>
          <input className="font_size"
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form_text"> Last Name</small>
          <input className="font_size"
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>
        <div className="form-group">
          <small className="form_text"> Address</small>
          <input className="font_size"
            type="text"
            placeholder="Address"
            name="Address"
            value={Address}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
          <small className="form_text"> UserName</small>
          <input className="font_size"
            type="text"
            placeholder="UserName"
            name="UserName"
            value={UserName}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
          <small className="form_text"> Email</small>
          <input className="font_size"
            type="text"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
          <small className="form_text">Mobile Number</small>
          <input className="font_size"
            type="text"
            placeholder="MobileNo"
            name="MobileNo"
            value={MobileNo}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>



        <div className="form-group">
          <small className="form_text">Password</small>
          <input className="font_size"
            type="password"
            placeholder="Password"
            name="Password"
            value={Password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form_text">Confirm Password</small>
          <input className="font_size"
            type="password"
            placeholder="Confirm Your Password"
            name="ConfirmPassword"
            value={ConfirmPassword}
            onChange={e => onChange(e)}
          />
        </div>
        
      <input type="submit" className="btn btn-primary" value="ClientRegistration" />

        <input type="submit" className="btn btn-primary" value="Register As Client" />

      <Link to="/verify-login">
           < button type="submit" className="btn btn-dark btn-lg btn-block">Next</button>
      </Link>
      <Link to="/sign-in">
         <p className="forgot-password text-right">Already registered <a href="#">log in?</a></p>
      </Link>



     </form>
     
    </Fragment>
  );
};

export default ClientRegister;
