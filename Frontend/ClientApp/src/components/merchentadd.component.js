import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';




export default class Employee extends Component {
    render() {
        return (
            
        <div>
        
            <div>
              <div class="position-absolute top-left"> 
                 <p class="new2"> **** WELL DONE! YOU CAN PUBLISH YOUR ADVERTISMENTS **** </p> 
                  <p class="new2"> </p> 
              </div> 
  
              <div class="position-absolute mid-left"> 
              <Link to="/pay">  
                 <button type="button" class="new3">HOTEL & CATERING</button> 
              </Link>
                
              </div> 
              <div class="position-absolute mid-center"> 
              <Link to="/pay"> 
                 <button type="button" class="new3">SALOON</button> 
             </Link>
              </div> 
              <div class="position-absolute mid-right"> 
              <Link to="/pay"> 
                 <button type="button" class="new3">PHOTOGRAPGHY</button> 
              </Link> 
                
              </div> 
  
              <div class="position-absolute bottom-left"> 
              <Link to="/pay"> 
                 <button type="button" class="new3">JEWLERIES</button> 
              </Link>
               
              </div> 
              <div class="position-absolute bottom-center"> 
              <Link to="/pay"> 
                 <button type="button" class="new3" >DECORATIONS</button> 
              </Link>
               
              </div> 
              <div class="position-absolute bottom-right"> 
              <Link to="/pay"> 
                 <button type="button" class="new3">ENTERTAINMENT</button> 
              </Link > 
               
              </div> 
            </div> 
        </div> 
     
        );
    }
}
