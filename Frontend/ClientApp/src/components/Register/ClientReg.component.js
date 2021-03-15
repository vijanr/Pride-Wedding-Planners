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
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

        <div className="form-group">
        <label>Client NIC No</label>
          <input className="Form-control"
            type="text"
            placeholder="Client NIC"
            name="ClientNIC"
            value={ClientNIC}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
        <label>First Name</label>
          <input className="Form-control"
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
        <label>Last Name</label>
          <input className="Form-control"
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>
        <div className="form-group">
        <label>Address</label>
          <input className="Form-control"
            type="text"
            placeholder="Address"
            name="Address"
            value={Address}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
        <label>Username</label>
          <input className="Form-control"
            type="text"
            placeholder="UserName"
            name="UserName"
            value={UserName}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
        <label>Email</label>
          <input className="Form-control"
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>

        <div className="form-group">
          <label>Mobile No</label>
          <input className="Form-control"
            type="text"
            placeholder="MobileNo"
            name="MobileNo"
            value={MobileNo}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>



        <div className="form-group">
        <label>Password</label>
          <input className="Form-control"
            type="password"
            placeholder="Password"
            name="Password"
            value={Password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input className="Form-control"
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
