import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Orders } from './pages/orders';
import { Tracking } from './pages/Tracking';
 
import './App.css'
function App() {

  return (
    <Routes>
      <Route 
        index element={<HomePage />} />

      <Route 
        path="Checkout"
        element={<CheckoutPage />} />

      <Route 
        path="Orders"
        element={<Orders />} />

      <Route 
        path="Tracking"
        element={<Tracking />}/>
    </Routes>
  )
}

export default App
