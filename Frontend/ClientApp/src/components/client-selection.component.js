import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './selection.css';




export default class Employee extends Component {
    render() {
        return (
            
        <div>
        
            <div>
              <div class="position-absolute top-left"> 
                 <p class="new2"> **** WELL DONE! **** </p> 
                  <p class="new2">YOU CAN DISCOVER CATEGORIES </p> 
              </div> 
              <h1 className="testClassNull">  </h1>
  
              <div class="position-absolute mid-left"> 
                
                 <button type="button" class="new3">HOTEL & CATERING</button> 
                
              </div> 
              <div class="position-absolute mid-center"> 
                
                 <button type="button" class="new3">SALOON</button> 
               
              </div> 
              <div class="position-absolute mid-right"> 
               
                 <button type="button" class="new3">PHOTOGRAPGHY</button> 
                
              </div> 
  
              <div class="position-absolute bottom-left"> 
              
                 <button type="button" class="new3">JEWLERIES</button> 
               
              </div> 
              <div class="position-absolute bottom-center"> 
                
                 <button type="button" class="new3" >DECORATIONS</button> 
               
              </div> 
              <div class="position-absolute bottom-right"> 
                
                 <button type="button" class="new3">ENTERTAINMENT</button> 
               
              </div> 
            </div> 
        </div> 
     
        );
    }
}
