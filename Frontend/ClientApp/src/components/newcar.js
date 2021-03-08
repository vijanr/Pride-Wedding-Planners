import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
//import '..node_modules/bootstrap-social/bootstrap-social.css';
import img from './images/slide1.jpg';
import img1 from './images/pln1.PNG';
import img2 from './images/giphy (1).gif';


export default class DemoCarousel extends Component {
    render() {
        return (

            <Carousel >

             <div className="card-body">
                <div className="myb">
                  
                    <img src={img} alt="img" />

                    <p className="legend text-white">
                    Nothing is more valuable than reaching prospects at the time they are shopping for wedding-related services. Having a trusted vendor hand out your card to their customers is the best advertising you can get. Your target list here should include Hotel, Saloon, Photography,Decorations etc.
                    </p>
                </div>
                </div>

                <div className="card-body">


                <div className="myb">
                    <h2 className="testClassnew text-white">Everything you need to plan a wedding</h2>
                    <img src={img1} alt="img"/>
                    <div className="legend text-white-center" > 
                     From setting up a website,capture online sevices,sending paperless save-the-date and time,to keeping you on track with your wedding checklist and vendor information,This website is the planning platform to get you from "yes" to do
                    </div>
                    
                </div>
                </div>
                <div className="card-body">

                <div className="myb">
                <h2>
                  <span class="badge badge-danger"> YOUR WEDDING VENDOR SEARCH JUST GOT EASIER !!</span>
                </h2>
                    <img src={img2} alt="img"/>
                    <div className="centered" > WE ARE PRIDE WEDDING SERVICE PROVIDER</div>     
                </div>
                </div>
            </Carousel>
            
        );
    }
}
