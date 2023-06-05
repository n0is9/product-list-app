import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductList from './pages/ProductList';
import NotFound from './pages/NotFound';
import ProductView from './pages/ProductView';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<><Header /><ProductList /><Footer /></>} />
                    <Route path="/product/:id" element={<><Header /><ProductView /><Footer /></>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
