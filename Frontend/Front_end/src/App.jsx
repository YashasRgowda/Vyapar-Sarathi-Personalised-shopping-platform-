// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegistrationChoice from './components/registration/RegistrationChoice';
import CustomerRegistration from './components/registration/CustomerRegistration';
import ShopOwnerRegistration from './components/registration/ShopOwnerRegistration';
import LoginPage from './components/login/LoginPage';
import CategorySelector from './components/categories/CategorySelector';
import SellerDashboard from './components/sellersUI/SellerDashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes here as needed */}
        <Route path='/register' element={ <RegistrationChoice /> } />
        <Route path='/register/customer' element={ <CustomerRegistration /> } />
        <Route path='/register/shop-owner' element={ <ShopOwnerRegistration /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/login/category' element={ <CategorySelector />} />
        <Route path='/sellersdashboard' element={ <SellerDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;