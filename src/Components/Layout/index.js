import React from 'react';
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
    return (
        <Router>
            <Routes>
                <Route exact path="/aleimew-website-mainpage" element={<Home />} />
                <Route path="/What" element={<What />} />
                <Route path="/Who" element={<Who />} />
                <Route path="/How" element={<How />} />
            </Routes>
        </Router>
    );
};

export default Layout;