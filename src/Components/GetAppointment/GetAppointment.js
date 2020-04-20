import React, { useState, useContext } from 'react';
import './GetAppointment.css';
import image from '../../../src/Images/MaskGroup.png';
import fakeData from '../../FakeData/Index';
import CartItem from '../CartItem/CartItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {DateContext} from '../../App';

const GetAppointment = () => {

    const [appointments, setAppointments] = useState(fakeData);
    const [dateContext, setDateContext] = useContext(DateContext);

    return (
        <div className="container">
            <div className="text-center">
                <h1 >Appointment</h1>
            </div>
            
            <div className="row">
                <div className="col-md-6 text-center">
                    <h5 className="headline" style={{ marginBottom: '20px' }}>Pick your Schedule</h5>
                    <DatePicker className="date-picker"
                        selected={dateContext}
                        //placeholderText="Click to select a date"
                        onChange={date => setDateContext(date)}
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date()}
                        //isClearable
                        inline
                    />
                </div>
                <div className="col-md-6">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="text-center">
            <h4>Available Appointment are</h4>
            </div>
            <div className="row text-center">
                {
                    appointments.map(ad => <CartItem key={ad.id} appointments={ad}></CartItem>)
                }
            </div>
        </div>
    );
};

export default GetAppointment;