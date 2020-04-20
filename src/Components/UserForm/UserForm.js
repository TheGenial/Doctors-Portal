import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DateContext } from '../../App';
import './UserForm.css';
import { useForm } from 'react-hook-form';
import fakeData from '../../FakeData/Index';

const UserForm = () => {

    const { id } = useParams();
    const [dateContext] = useContext(DateContext);
    
    const stringDate = new Date(dateContext);
    const date = stringDate.substring(0,10);
    console.log(date);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    const [appointmentDetails, setAppointmentDetails] = useState();

    useEffect(() => {
        const selectedData = (fakeData.filter(fd => fd.id == id));
        setAppointmentDetails(selectedData);
        console.log(appointmentDetails);
      }, []);

    return (
        <div className="container text-center">
            <h3>Data</h3>
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
                {errors.email && <span className="error">Name is required</span>}

                < input name="mobile"
                    ref={register({ required: true })}
                    placeholder="01700000000"
                />
                {errors.mobile && <span className="error">Mobile number is required</span>}

                < input name="time" disabled
                    ref={register({ required: true })}
                    placeholder="Your Name"
                    
                />
                
                < input name="date" disabled
                    ref={register({ required: true })}
                    placeholder={JSON.stringify(dateContext)}
                />

                <input type="submit" />
            </form>
        </div>
    );
};

export default UserForm;