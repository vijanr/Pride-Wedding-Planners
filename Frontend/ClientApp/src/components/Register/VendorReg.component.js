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
          <small className="form_text">Company Name</small>
          <input className="font_size"
            type="text"
            placeholder="CompanyName"
            name="CompanyName"
            value={CompanyName}
            onChange={e => onChange(e)}
          />
        </div>

        <div className="form-group">
          <small className="form_text">Company Category</small>
          <input className="font_size"
            type="text"
            placeholder="Company Category"
            name="CompanyCategory"
            value={CompanyCategory}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <small className="form_text"> Telephone Number</small>
          <input className="font_size"
            type="text"
            placeholder="Telephone Number"
            name="TelephoneNo"
            value={TelephoneNo}
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
