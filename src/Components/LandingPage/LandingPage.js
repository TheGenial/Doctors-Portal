import React from 'react';
import image from '../../../src/Images/MaskGroup.png';
import './LandingPage.css';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col-md-6 row-element">
                    <h3>Your New Smile</h3>
                    <h4>Starts Here</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    <Link to="/getAppointment"><button>Get Appointment</button></Link>
                    <Link to="/doctorPanel"><button>Doctor Panel</button></Link>
                </div>
                <div class="col-md-6 row-element">
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;