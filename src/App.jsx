
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainLayout from './layout/MainLayout';
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './components/home/HomePage';
import NotFound from './components/ui/NotFound';
import ProductPage from './components/product/productPage';
import { useEffect, useState } from 'react';
import api from './api';

import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage';
import LoginPage from './components/user/LoginPage';
import ProtectedRoute from './components/ui/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import UserData from './components/user/UserData';



function App() {

  const [numCartItems,setNumCartItems]=useState(0);
  const cart_code=localStorage.getItem("cart_code")

  useEffect(()=>{
      if(cart_code){
        api.get(`get_cart_stat?cart_code=${cart_code}`)
        .then(res=>{
          console.log(res.data.num_of_items,"ggggg")
          setNumCartItems(res.data.num_of_items)
        })
        .catch(err=>{
          console.log(err.message)
        })
      }
  },[numCartItems])

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout numCartItems={numCartItems}/>}>
            <Route index element={<HomePage />} />
            <Route path='product_detail/:slug' element={<ProductPage />} />
            <Route path='checkout' element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>} />
            <Route path='cart' element={<CartPage numCartItems={numCartItems} setNumCartItems={setNumCartItems}/>} />
            <Route path="login" element={<LoginPage/>}/>
            <Route path="profile" element={<UserData/>}/>
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  </>
  )
}

export default App
