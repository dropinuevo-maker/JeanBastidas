import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Tag, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export function AdminLayout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">JEANCOL <span className="text-accent">Admin</span></h2>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="flex items-center gap-3 text-gray-400 hover:text-white font-medium"><LayoutDashboard size={20} /> Dashboard</Link>
          <Link to="/admin/products" className="flex items-center gap-3 text-gray-400 hover:text-white font-medium"><Package size={20} /> Productos</Link>
          <Link to="/admin/orders" className="flex items-center gap-3 text-gray-400 hover:text-white font-medium"><ShoppingCart size={20} /> Pedidos</Link>
          <Link to="/admin/categories" className="flex items-center gap-3 text-gray-400 hover:text-white font-medium"><Tag size={20} /> Categorías</Link>
          <Link to="/admin/offers" className="flex items-center gap-3 text-gray-400 hover:text-white font-medium"><Tag size={20} /> Ofertas</Link>
          <Link to="/admin/settings" className="flex items-center gap-3 text-gray-400 hover:text-white font-medium"><Settings size={20} /> Configuración</Link>
          <div className="pt-8 border-t border-gray-700">
            <Link to="/" className="flex items-center gap-3 text-gray-300 hover:text-white font-medium pb-4 border-b border-gray-700">Store</Link>
            <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:text-red-400 font-medium pt-4"><LogOut size={20} /> Salir</button>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
