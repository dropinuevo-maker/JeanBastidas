import { useProducts } from '../../context/ProductContext';
import { useCategories } from '../../context/CategoryContext';
import { useOrders } from '../../context/OrderContext';
import { Package, ShoppingCart, Tag, Flame } from 'lucide-react';

export const AdminDashboard = () => {
    const { products } = useProducts();
    const { categories } = useCategories();
    const { orders } = useOrders();

    const stats = [
        { title: 'Productos', count: products.length.toString(), icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
        { title: 'Pedidos', count: orders.length.toString(), icon: ShoppingCart, color: 'text-purple-600', bg: 'bg-purple-50' },
        { title: 'Categorías', count: categories.length.toString(), icon: Tag, color: 'text-green-600', bg: 'bg-green-50' },
        { title: 'Ofertas', count: '0', icon: Flame, color: 'text-red-600', bg: 'bg-red-50' },
    ];

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard General</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map(item => (
                    <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow">
                        <div className={`p-4 rounded-xl ${item.bg} ${item.color}`}>
                            <item.icon size={28} />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm font-medium">{item.title}</p>
                            <p className="text-3xl font-bold text-gray-900">{item.count}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6 text-gray-900">Actividad Reciente</h2>
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                    <p className="text-gray-500 font-medium">No hay actividad reciente para mostrar</p>
                </div>
            </div>
        </div>
    );
};
