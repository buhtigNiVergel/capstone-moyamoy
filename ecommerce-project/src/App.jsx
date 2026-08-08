import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckouPage';
import { Orders } from './pages/orders';

import './App.css'
function App() {

  return (
    <Routes>
      <Route 
        index element={<HomePage />} />

      <Route 
        path="checkout"
        element={<CheckoutPage />} />

      <Route 
        path="Orders"
        element={<Orders />} />
    </Routes>
  )
}

export default App
