import React from 'react'
import Room from '../Room/Room';
import { useNavigate } from "react-router-dom";
import './Home.css'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div className='home-page'>
            <h1>Home Page</h1>
            <button onClick={() => navigate("/room")}>Go To Room</button>
        </div>
    )
}

export default Home