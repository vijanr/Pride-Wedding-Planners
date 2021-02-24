import React, { Component } from "react";
//import { Link } from 'react-router-dom';

import "./index.css";
export default class Forget extends Component {

    render() {
        return (
         
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                  <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                
            </form>
          
        );
    }
}