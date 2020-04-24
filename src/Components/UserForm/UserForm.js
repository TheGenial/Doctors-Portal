import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DateContext } from '../../App';
import './UserForm.css';
import { useForm } from 'react-hook-form';
import fakeData from '../../FakeData/Index';

const UserForm = () => {

    const { id } = useParams();
    const [dateContext] = useContext(DateContext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => { 
        console.log(data);
        console.log(data.name);
        console.log(data.time);
        console.log(data.date);

        fetch('https://intense-taiga-10508.herokuapp.com/addPatientInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert("Hello " +data.name +" your appointment will take place at "+ data.time+" on "+data.date);
            })
    }

    return (
        <div className="container">
            <h3>{fakeData[id-1].problemType}</h3>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                < input name="name"
                    ref={register({ required: true })}
                    placeholder="Your Name"
                />
                {errors.name && <span className="error">Name is required</span>}

                < input name="email"
                    ref={register({ required: true })}
                    placeholder="Your Email"
                />
                {errors.email && <span className="error">Email is required</span>}

                < input name="mobile"
                    ref={register({ required: true })}
                    placeholder="01700000000"
                />
                {errors.mobile && <span className="error">Mobile number is required</span>}

                < input name="time" disabled
                    placeholder= {fakeData[id].time}
                    ref={register({ required: true })}
                    defaultValue = {fakeData[id-1].time}
                />
                
                < input name="date" disabled 
                    placeholder={dateContext.toLocaleDateString()}
                    ref={register({})}
                    defaultValue = {dateContext.toLocaleDateString()}
                />

                <input type="submit" />
            </form>

        </div>
    );
};

export default UserForm;