import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {FacebookLoginButton} from 'react-social-login-buttons';
import "./index.css";
export default class Login extends Component {
    render(){
        return (
            <form>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <Link to="/client-selection">
              <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
            </Link>

               <div className="form-group">
                Or continue with your social account
              </div>
              <FacebookLoginButton classname="mt-1 mb-1"/>
              <div className="forgot-password text-right">
              <Link to="/sign-up">
              sign up
                </Link>
                <span className="p-2">|</span>
                <Link to="/sign-up">
               Forgot Password
               </Link>
              </div>         
          </form>
        );
      }
      }