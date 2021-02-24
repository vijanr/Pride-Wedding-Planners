import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';




export default class Employee extends Component {
    render() {
        return (
            
        <div>
            <div>
              <div class="position-absolute top-left"> 
                 <p class="new2">PRIDE WEDDING SERVICE PROVIDER</p> 
              </div> 
  
              <div class="position-absolute mid-left"> 
                <Link to="/register">
                 <button type="button" class="new3">HOTEL & CATERING</button> 
                </Link>
              </div> 
              <div class="position-absolute mid-center"> 
                <Link to="/register">
                 <button type="button" class="new3">SALOON</button> 
                </Link>
              </div> 
              <div class="position-absolute mid-right"> 
                <Link to="/register">
                 <button type="button" class="new3">PHOTOGRAPGHY</button> 
                </Link>
              </div> 
  
              <div class="position-absolute bottom-left"> 
                <Link to="/register">
                 <button type="button" class="new3">JEWLERIES</button> 
                </Link>
              </div> 
              <div class="position-absolute bottom-center"> 
                <Link to="/register">
                 <button type="button" class="new3" >DECORATIONS</button> 
                </Link>
              </div> 
              <div class="position-absolute bottom-right"> 
                <Link to="/register">
                 <button type="button" class="new3">ENTERTAINMENT</button> 
                </Link>
              </div> 
            </div> 
        </div> 
     
        );
    }
}
