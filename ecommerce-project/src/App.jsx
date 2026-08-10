import axios from 'axios'
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { Orders } from './pages/orders';
import { Tracking } from './pages/Tracking';
import { NotFoundPage } from './pages/NotFoundPage'
 
import './App.css'
function App() {

  const [cart, setCart] = useState([])

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
    
        setCart(response.data);
    })
  }, [])

  return (
    <Routes>
      <Route 
        index element={<HomePage cart = {cart}/>} />

      <Route 
        path="Checkout"
        element={<CheckoutPage cart = {cart}/>} />

      <Route 
        path="Orders"
        element={<Orders cart = {cart}/>} />

      <Route 
        path="Tracking"
        element={<Tracking />}/>

      <Route 
        path="*" 
        element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App
