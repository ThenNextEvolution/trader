import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Log from './Home'; // Ensure Home path is correct
import ProductCard from './feed';
import Userhome from './UserHomepage';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Log />} />
                <Route path='/feed' element={<ProductCard />}/>
                <Route path='/homepage' element= {< Userhome /> }/>
                <Route path='/profile' element={<Userhome/>}/>
            </Routes>
        </Router>
    );
}
