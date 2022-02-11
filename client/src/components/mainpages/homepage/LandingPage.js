import React from 'react';
import HomePage from './HomePage';
import HomePageGrid from './HomePageGrid';

const LandingPage = () => {
    return(
        <div className="homepage">
            <HomePage />
            <HomePageGrid />
        </div>
    )
}

export default LandingPage