import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3 classname="font_size">Registration</h3>

                <div className="form-group">
                    <label classname="font_size">NIC number</label>
                    <input type="text" className="font_size" placeholder="NIC Number" />
                </div>

                <div className="form-group">
                    <label classname="font_size">First name</label>
                    <input type="text" className="font_size" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label classname="font_size">Last name</label>
                    <input type="text" className="font_size" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label classname="font_size">Telephone number</label>
                    <input type="text" className="font_size" placeholder="Teleohone number" />
                </div>



                <div className="form-group">
                    <label classname="font_size">Username</label>
                    <input type="text" className="font_size" placeholder="Username" />
                </div>
                <div className="form-group">
                    <label classname="font_size">Email</label>
                    <input type="email" className="font_size" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label classname="font_size">Password</label>
                    <input type="password" className="font_size" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label classname="font_size">Confirm Password</label>
                    <input type="password" className="font_size" placeholder="Enter password" />
                </div>

                <Link to="/verify-login">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                </Link>
                <Link to="/sign-in">
                    <p className="forgot-password text-right">Already registered <a href="#">log in?</a></p>
                </Link>
            </form>
        );
    }
}