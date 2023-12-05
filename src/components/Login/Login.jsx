import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../auth/authContext';

const Login = () => {
    const navigate = useNavigate();
    const { user, handleUserLogin } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        if (user) {
            navigate("/room");
        }
    }, [])

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(l => ({ ...l, [name]: value }));
    }
    console.log(formData);
    return (
        <>
            <form
                className='login-form'
                onSubmit={(e) => { handleUserLogin(e, formData) }}>
                <h2>Login</h2>
                <input
                    type="email"
                    id="email"
                    name='email'
                    placeholder="Enter email"
                    autoComplete={''}
                    value={formData.email}
                    onChange={handleChange}>
                </input><br></br>
                <input
                    type="password"
                    id="password"
                    name='password'
                    placeholder="Enter Password"
                    autoComplete={''}
                    value={formData.password}
                    onChange={handleChange}>
                </input><br></br>
                <button type="submit">Login</button>
            </form>

        </>
    )
}

export default Login