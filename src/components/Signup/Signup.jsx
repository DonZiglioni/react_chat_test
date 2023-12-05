import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authContext";

const Signup = () => {
    const { handleUserSignup } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordDub: "",
    });
    const [formErrors, setFormErrors] = useState([]);


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    return (
        <div className="signup">
            <form className='signup-form' onSubmit={(e) => handleUserSignup(e, formData)}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <input
                    type="password"
                    id="passwordDub"
                    name="passwordDub"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    autoComplete={''}>
                </input><br></br>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup