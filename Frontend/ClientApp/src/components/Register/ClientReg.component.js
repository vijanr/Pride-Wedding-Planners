import React, { Fragment, useState } from "react";
//import { Link } from "react-router-dom";

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
      <h1 className="large ">Client Registration</h1>
      <p className="lead">
        <i className="text-middle" /> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>

      <div className="form-group">
          <small className="form-text">Client NIC Number</small>
          <input
            type="text"
            placeholder="ClientNIC"
            name="ClientNIC"
            value={ClientNIC}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <small className="form-text">First Name</small>
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            value={FirstName}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text"> Last Name</small>
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            value={LastName}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>
        <div className="form-group">
          <small className="form-text"> Address</small>
          <input
            type="text"
            placeholder="Address"
            name="Address"
            value={Address}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
          <small className="form-text"> UserName</small>
          <input
            type="text"
            placeholder="UserName"
            name="UserName"
            value={UserName}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
          <small className="form-text"> Email</small>
          <input
            type="text"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>

        <div className="form-group">
          <small className="form-text">Mobile Number</small>
          <input
            type="text"
            placeholder="MobileNo"
            name="MobileNo"
            value={MobileNo}
            onChange={e => onChange(e)}
          />
          <small className="form-text"></small>
        </div>



        <div className="form-group">
          <small className="form-text">Password</small>
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={Password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form-text">Confirm Password</small>
          <input
            type="password"
            placeholder="Comfirm Your Password"
            name="ConfirmPassword"
            value={ConfirmPassword}
            onChange={e => onChange(e)}
          />
        </div>
        

        <input type="submit" className="btn btn-primary" value="Register As Client" />
     </form>
      
    </Fragment>
  );
};

export default ClientRegister;
