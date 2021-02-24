
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './welcome.css';




/*const element=<h1 className="testClass"> WELCOME TO PRIDE WEDDING SERVICE  </h1>;
ReactDOM.render(element,document.getElementById('root')); */



/*const element2=<h1 className="testClass2">  </h1>;
ReactDOM.render(element2,document.getElementById('root2')); */


/*class Employee extends React.Component {
    addEmployee=()=>{
        alert("Create an account");
    }
    render(){
        return <div>
            <h1 className="testClass"> WELCOME TO PRIDE WEDDING SERVICE  </h1>
              <h1 className="testClass2">  </h1>
               <h2 className="testClass5"> CAPTURE  YOUR  DREAM  WEDDING </h2>
                 <h1>  </h1>
            <p>
                <button className="testClass4" onclick={this.addEmployee}>REGISTER NOW</button>
            </p> 
        </div>
    }
}*/

/*const element3=<Employee className="testClass2">  </Employee>;
ReactDOM.render(element3,document.getElementById('root3'));*/


export default class Employee extends Component {
    render() {
        return (

            <div>
                 <h1 className="testClass"> WELCOME TO PRIDE WEDDING SERVICE  </h1>
                  <h1 className="testClass2"> </h1>
                   <h2 className="testClass5"> | CAPTURE  YOUR  DREAM  WEDDING | </h2>
                 
                 <div> 
                    <Link to="/path">
                     <button className="testClass4" onclick={this.addEmployee}>REGISTER NOW</button>
                    </Link>
                 </div> 
           </div>  

        );
    }
}
