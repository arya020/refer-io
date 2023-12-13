import React, { Component } from 'react';
import './Home.css';
import graphic1 from '../img/graphic1.png';
import graphic2 from '../img/graphic2.png';

class Home extends Component {


    render() {
        return (
            <div className="home-container">
                <div className='section1'>
                    <div className='text1'>
                        <b><h2>Willing to refer someone?</h2></b>
                        <br></br>
                        <span>Find different candidates to <br></br>provide them an opportunity<br></br> at your company!</span>
                        <br></br>
                        <br></br>
                        <button>Refer  Now</button>
                    </div>
                    <div className='graphic1'>
                        <img src={graphic1}></img>
                    </div>
                
                </div>
                <div className='section2'>
                    <div className='text1'>
                        <h2>Refer and get Referred for various job roles</h2>
                    </div>
                    <div className='job_roles'>
                        <button class="job-button" data-role="developer">Developer</button>
                        <button class="job-button" data-role="designer">Designer</button>
                        <button class="job-button" data-role="analyst">Analyst</button>
                        <button class="job-button" data-role="operations">Operations</button>
                        <button class="job-button" data-role="sales">Sales</button>
                        <br></br>
                        <button class="job-button" data-role="business_development">Business Development</button>
                        <button class="job-button" data-role="consulting">Consulting</button>
                        <button class="job-button" data-role="human_resources">Human Resources</button>
                        <button class="job-button" data-role="information_technology">Information Technology</button>
                        <button class="job-button" data-role="education">Education</button>
                        <button class="job-button" data-role="finance">Finance</button>
                        <br></br>
                        <button class="job-button" data-role="accounting">Accounting</button>
                        <button class="job-button" data-role="Product_management">Product management</button>
                    </div>
                </div>
               
                <div className='section3'>
                    <div className='graphic2'>
                    <img src={graphic2}></img>
                    </div>
                    <div className='text1'>
                        <b><h2>Find opportunities</h2></b>
                        <br></br>
                        <span>Get a referred at you dream company</span>
                        <br></br>
                        <br></br>
                        <button>Join  Now</button>
                    </div>
                    </div>
                </div>
                
         
        )
    }
}

export default Home;