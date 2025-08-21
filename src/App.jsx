import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Order from './components/Order'
import Product from './components/Product'
import Category from './components/Category'
import CategoryForm from './components/CategoryForm'
import ProductForm from './components/ProductForm'
import OrderForm from './components/OrderForm'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='grow ml-60 md:ml-64 lg:h-screen bg-gray-100 text-gray-900 '>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Category */}
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/new" element={<CategoryForm />} />

        {/* Product */}
        <Route path="/Product" element={<Product />} />
        <Route path="/Product/new" element={<ProductForm />} />

        {/* Order */}
        <Route path="/Order" element={<Order />} />
        <Route path="/Order/new" element={<OrderForm />} />
            {/* Add more routes like: <Route path="/products" element={<Products />} /> */}
          </Routes>
        </div>
      </div>

      
    </div>
  )
}

export default App
