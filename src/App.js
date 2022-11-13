import React from 'react';
import './app.css'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './pages/usersList/Users';
import User from './pages/Singleuser/User';
import Newuser from './pages/NewUser/Newuser';
import { Products } from './pages/productList/Products';
import { Product } from './pages/SingleProduct/Product';
import { NewProduct } from './pages/NewProduct/NewProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="bodyWrapper">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home/>}>       
          </Route>
          <Route path='/users'element={<Users/> }>      
          </Route>
          <Route path='/user/:userid'element={<User/> }>
          </Route>
          <Route path='/newuser'element={<Newuser/> }>
          </Route>

          <Route path='/products'element={<Products/> }>      
          </Route>
          <Route path='/product/:productId'element={<Product/> }>
          </Route>
          <Route path='/newproduct'element={<NewProduct/> }>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


