import React from 'react';
import './css/Home.css';
import yourImage from '../assets/images/your-image.jpg';

const Home = () => {
    return (
        <div className="home" id="home">
            <img src={yourImage} alt="Harsh Khambra" className="profile-image" />
            <h1>I'm Harsh Khambra</h1>
        </div>
    );
}

export default Home;
