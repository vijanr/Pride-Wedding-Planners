import React, { Component } from "react";
import { Link } from 'react-router-dom';

import "./index.css";
export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Verify Log in</h3>

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
            </form>
        );
    }
}