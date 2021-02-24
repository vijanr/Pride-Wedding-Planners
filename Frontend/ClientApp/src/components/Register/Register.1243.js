import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
//import './CSS/form.css';

import  {ClientRegistration}  from '../authorization/Auth';

const Register = () => {
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
  console.log("On Submit Function is Working")
   ClientRegistration (ClientNIC, FirstName, LastName, Address, UserName,Email,MobileNo,Password, ConfirmPassword);
    


};

  return (
    <Fragment>
      <h1 className="large ">Client Registration</h1>
      <p className="lead">
        <i className="text-middle" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>

      <div className="form-group">
      <label>Client NIC Number</label>
          <input className="form-control" 
            type="text"
            placeholder="ClientNIC"
            name="ClientNIC"
            value={ClientNIC}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
        <label>First Name</label>
          <input className="form-control" 
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
        <label>Last Name</label>
          <input className="form-control" 
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>
        <div className="form-group">
        <label>Address</label>
          <input className="form-control" 
            type="text"
            placeholder="Address"
            name="Address"
            value={Address}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
        <label>UserName</label>
          <input className="form-control" 
            type="text"
            placeholder="UserName"
            name="UserName"
            value={UserName}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
        <label>Email</label>
          <input className="form-control" 
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
        <label>Mobile Number</label>
          <input className="form-control" 
            type="text"
            placeholder="MobileNo"
            name="MobileNo"
            value={MobileNo}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>



        <div className="form-group">
        <label>Password</label>
          <input className="form-control" 
            type="password"
            placeholder="Password"
            name="Password"
            value={Password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
        <label>Confirm Password</label>
          <input className="form-control" 
            type="password"
            placeholder="Comfirm Your Password"
            name="ConfirmPassword"
            value={ConfirmPassword}
            onChange={e => onChange(e)}
          />
        </div>
        

        <input type="submit" className="btn btn-primary" value="ClientRegistration" />
     </form>
      
    </Fragment>
  );
};

export default Register;
