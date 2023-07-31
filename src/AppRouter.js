// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your pages/components
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import MerchShop from './pages/MerchShop';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserAccount from './pages/UserAccount';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';
import Settings from './pages/Settings';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import Chat from './pages/Chat';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Add routes for each page */}
        <Route  path="/" element={<Home/>} />
        <Route  path="/how-it-works" element={<HowItWorks/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/careers" element={<Careers/>} />
        <Route  path="/press" element={<Press/>} />
        <Route  path="/faq" element={<FAQ/>} />
        <Route  path="/privacy" element={<Privacy/>} />
        <Route  path="/terms" element={<Terms/>} />
        <Route  path="/blog" element={<Blog/>} />
        <Route  path="/merch-shop" element={<MerchShop/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/sign-up" element={<SignUp/>} />
        <Route  path="/user-account" element={<UserAccount/>} />
        <Route  path="/favorites" element={<Favorites/>} />
        <Route  path="/search-results" element={<SearchResults/>} />
        <Route  path="/settings" element={<Settings/>} />
        <Route  path="/checkout" element={<Checkout/>} />
        <Route  path="/order-tracking" element={<OrderTracking/>} />
        <Route  path="/chat" element={<Chat/>} />
        
        {/* Add a default route for any unknown paths */}
        {/* For example, show a 404 page */}
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
