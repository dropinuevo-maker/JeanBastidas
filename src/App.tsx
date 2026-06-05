/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/store/Navbar';
import { Footer } from './components/store/Footer';
import { CartDrawer } from './components/store/CartDrawer';
import { HomeScreen } from './pages/HomeScreen';
import { ProductDetailScreen } from './pages/ProductDetailScreen';
import { CategoriesScreen } from './pages/CategoriesScreen';
import { OffersScreen } from './pages/OffersScreen';
import { FeaturedProductsScreen } from './pages/FeaturedProductsScreen';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminCategories } from './pages/admin/AdminCategories';
import { AdminOffers } from './pages/admin/AdminOffers';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminLogin } from './pages/admin/AdminLogin';
import { HelmetProvider } from 'react-helmet-async';
import { CategoryProvider } from './context/CategoryContext';
import { ProductProvider } from './context/ProductContext';
import { OfferProvider } from './context/OfferContext';
import { OrderProvider } from './context/OrderContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';


export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <HelmetProvider>
      <ProductProvider>
        <CategoryProvider>
          <OfferProvider>
            <OrderProvider>
              <AuthProvider>
                <BrowserRouter>
            <div className="min-h-screen bg-[#FAFAFA] text-[#111111]">
              <Navbar onCartOpen={() => setIsCartOpen(true)} />
              <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
              <main>
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/product/:slug" element={<ProductDetailScreen />} />
                  <Route path="/products" element={<FeaturedProductsScreen />} />
                  <Route path="/categories" element={<CategoriesScreen />} />
                  <Route path="/offers" element={<OffersScreen />} />
                  
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route element={<ProtectedRoute />}>
                      <Route path="/admin" element={<AdminLayout />}>
                          <Route path="dashboard" element={<AdminDashboard />} />
                          <Route path="products" element={<AdminProducts />} />
                          <Route path="orders" element={<AdminOrders />} />
                          <Route path="categories" element={<AdminCategories />} />
                          <Route path="offers" element={<AdminOffers />} />
                          <Route path="settings" element={<AdminSettings />} />
                      </Route>
                  </Route>
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
          </AuthProvider>
          </OrderProvider>
          </OfferProvider>
        </CategoryProvider>
      </ProductProvider>
    </HelmetProvider>
  );
}
