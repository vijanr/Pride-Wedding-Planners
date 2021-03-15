import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
     
            <form>
                <h3 classname="font_size">Newsteller Registration</h3>

                <div className="form-group">
                    <label classname="font_size">First name</label>
                    <input type="text" className="font_size" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label classname="font_size">Last name</label>
                    <input type="text" className="font_size" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label classname="font_size">Email</label>
                    <input type="email" className="font_size" placeholder="Enter email" />
                </div>


                <Link to="/verify-login">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Subscribe</button>
                </Link>
                
            </form>
         
        );
    }
}