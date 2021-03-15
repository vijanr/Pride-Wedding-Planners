import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import React, { Component } from './images';
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';

import './App.css';
import "./index.css"; 
import "./components/welcome.css";
import "./components/selection.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./components/welcome.component";
import Verify_Login_1 from "./components/login.component";
import Verify_Login_2 from "./components/login2.component";
import SignUp from "./components/signup.component";
import Selection from "./components/selection.component";
import Path from "./components/path.component";
import Client_Selection from "./components/client-selection.component";
import Signin from "./components/signin.component";
import Contactinfo from "./components/contactinfo.component";
import MerchentSignup from "./components/merchentregister.component";
import MerchentAdd from "./components/merchentadd.component";
import Upload from "./components/upload.component";
import Uploading from "./upload";
import Newcarousel from "./components/newcar";
import ClientRegister from "./components/Register/ClientReg.component";
import VendorRegister from "./components/Register/VendorReg.component";
import Payment from "./components/payment.component";
import Forget from "./components/forget.component";
import './custom.css'
import Navbar from "./components/NavMenu";
import Footer from "./components/Footer"
import News from "./components/Testimonials";
//import react from 'react';

/*export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}*/

function App() {
  return (<Router>
             <div className="outer">
          <div className="inner">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Selection} />
            <Route path="/selection" component={Selection} />
            <Route path="/register" component={Welcome} />
            <Route path="/path" component={Path} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-up-2" component={MerchentSignup}/>
            <Route path="/merchentadd" component={MerchentAdd}/>
            <Route path="/verify-login" component={Verify_Login_1} />
            <Route path="/verify-login-2" component={Verify_Login_2} />
            <Route path="/client-selection" component={Client_Selection} />
            <Route path="/sign-in" component={Signin}/>
            <Route path="/contact-info" component={Contactinfo}/>
            <Route path="/upload" component={Upload}/>
            <Route path="/newcar" component={Newcarousel}/>
            <Route path="/uploading" component={Uploading}/>
            <Route path="/pay" component={Payment}/>
            <Route path="/forget-pw" component={Forget}/>
            <Route path="/news" component={News}/>
            
            <Route path="/Client-Registration" component={ ClientRegister}/>
            <Route path="/Vendor-Registration" component={ VendorRegister}/>
          </Switch>
          </div> </div> 
          <Footer/>
    </Router>
    
  );
}

export default App;