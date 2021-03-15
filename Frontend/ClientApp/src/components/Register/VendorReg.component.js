import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";



import  {VendorRegistration}  from '../../authorization/authorization';

const VendorRegister = () => {
  const [formData, setFromData] = useState(
    {
        CompanyName: '',
        CompanyCategory: '',
        TelephoneNo: '',
        UserName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    });

  const {CompanyName, CompanyCategory, TelephoneNo, UserName,Email, Password,  ConfirmPassword} = formData;

  const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })

 const onSubmit = async e => {
  e.preventDefault();
  console.log("Vendor On Submit function is Working")
  VendorRegistration (CompanyName, CompanyCategory, TelephoneNo, UserName,Email,Password, ConfirmPassword);
    


};

  return (
    <Fragment>

      <form  onSubmit={e => onSubmit(e)}>
        
        <h3  className="testClass" >VENDOR REGISTRATION </h3>
         <h3 className="form_text">Create a new account</h3>
        
        <div className="form-group">
        <label>Company Name</label>
          <input className="form-control"
            type="text"
            placeholder="CompanyName"
            name="CompanyName"
            value={CompanyName}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
        <label>Company Category</label>
          <input className="form-control"
            type="text"
            placeholder="Company Category"
            name="CompanyCategory"
            value={CompanyCategory}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
        <label>Telephone No</label>
          <input className="form-control"
            type="text"
            placeholder="Telephone Number"
            name="TelephoneNo"
            value={TelephoneNo}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
        </div>
        
          <div className="form-group">
          <label>Username</label>
          <input className="form-control"
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
          <input className="form-control"
            type="email"
            placeholder="Email"
            name="Email"
            value={Email}
            onChange={e => onChange(e)}
          />
          <small className="font_size"></small>
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
            placeholder="Confirm Your Password"
            name="ConfirmPassword"
            value={ConfirmPassword}
            onChange={e => onChange(e)}
          />
        </div>
        
        
         <input className="font_size" type="submit" className="btn btn-primary" value="Register as a Vendor" />

         <Link to="/verify-login-2">
           < button type="submit" className="btn btn-dark btn-lg btn-block">Next</button>
         </Link>
         <Link to="/sign-in">
           <p className="forgot-password text-right">Already registered <a href="#">log in?</a></p>
         </Link>        
     </form>
  
    </Fragment>
  );
};

export default VendorRegister;
