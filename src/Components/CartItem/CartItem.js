import React from 'react';
import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
    const { id, problemType, time } = props.appointments
    return (
        <div className="col-md-4 mb-4">
            <div className="card text-center">
                <div className="card-body">
                    <h5>{problemType}</h5>
                    <h6>{time}</h6>
                    <Link to={"/userForm/" + id}><button>Book an Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CartItem;