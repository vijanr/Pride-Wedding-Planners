import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
     
            <form>
                <h3 className="testClass">Newsteller Registration</h3>

                <div className="form-group">
                    <label >First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label >Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>


                <Link to="/verify-login">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Subscribe</button>
                </Link>
                
            </form>
         
        );
    }
}