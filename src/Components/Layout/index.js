import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../../Pages/home';
import What from '../../Pages/what';
import Who from '../../Pages/who';
import How from '../../Pages/how';

const Layout = () => {
    const [windowDimension, setWindowDimension] = useState(null);

    useEffect(() => {
        setWindowDimension(window.innerWidth);
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const mobile = windowDimension <= 912;

    return (
        <Router>
            <Routes>
                <Route exact path="/aleimew-website-mainpage" element={<Home mobile={mobile} />} />
                <Route path="/What" element={<What mobile={mobile} />} />
                <Route path="/Who" element={<Who mobile={mobile} />} />
                <Route path="/How" element={<How mobile={mobile} />} />
            </Routes>
        </Router>
    );
};

export default Layout;