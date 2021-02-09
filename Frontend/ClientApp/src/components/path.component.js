
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';




export default class Employee extends Component {
    render() {
        return (
            <div>
                 <h1 className="testClass"> PUBLISHING ADVERTISMENTS & DISCOVERING PACKAGES </h1>
                  <h1 className="testClass8">  </h1>
                   <h2 className="testClass5"> | LOGGING AS| </h2>
                 
                 

                 <div class="flex-parent jc-center">
                      <Link to="/sign-up">
                        <button  class="green margin-right">Client</button>
                      </Link>
                 </div>   

                 <h3 className="testClass5"> </h3>

                 <h3 className="testClass5">OR</h3>

                 <div class="flex-parent jc-center">
                      <Link to="/sign-up-2">
                        <button  class="magenta">Merchent</button>
                      </Link>
                 </div>


           </div> 
     
        );
    }
}