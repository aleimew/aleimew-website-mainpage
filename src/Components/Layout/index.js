import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from '../../Pages/home';

const Layout = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/aleimew-website-mainpage" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default Layout;