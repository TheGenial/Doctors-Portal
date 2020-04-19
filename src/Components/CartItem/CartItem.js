import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const {problemType, time } = props.appointments
    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center">
                <div className="card-body">
                    <h5>{problemType}</h5>
                    <h6>{time}</h6>
                    <button
                        onClick={() => props.handleAppointment(props.appointments)}
                    >Book a Appointment</button>
                </div>
            </div>
    </div>
    );
};

export default CartItem;