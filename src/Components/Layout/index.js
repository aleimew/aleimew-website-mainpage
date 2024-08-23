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
import Test from '../../TestComponents/DjangoTest';

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

    const mobile = windowDimension <= 1024;

    return (
        <Router>
            <Routes>
                <Route exact path="/aleimew-website-mainpage" element={<Home mobile={mobile} />} />
                <Route path="/What" element={<What mobile={mobile} />} />
                <Route path="/Who" element={<Who mobile={mobile} />} />
                <Route path="/How" element={<How mobile={mobile} />} />
                <Route path="/wel" />
            </Routes>
        </Router>
    );
};

export default Layout;