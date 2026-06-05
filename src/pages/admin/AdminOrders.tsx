import { useState } from 'react';

const INITIAL_ORDERS = [
    { id: '#1234', customer: 'Juan Pérez', total: '$1,200,000', status: 'Entregado' },
    { id: '#1235', customer: 'María García', total: '$89,000', status: 'Pendiente' },
];

export const AdminOrders = () => {
    const [orders, setOrders] = useState(INITIAL_ORDERS);

    const toggleStatus = (id: string) => {
        setOrders(orders.map(order => 
            order.id === id 
                ? { ...order, status: order.status === 'Entregado' ? 'Pendiente' : 'Entregado' }
                : order
        ));
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Gestión de Pedidos</h1>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4">ID Pedido</th>
                            <th className="p-4">Cliente</th>
                            <th className="p-4">Total</th>
                            <th className="p-4">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b last:border-b-0 hover:bg-gray-50">
                                <td className="p-4 font-semibold">{order.id}</td>
                                <td className="p-4">{order.customer}</td>
                                <td className="p-4">{order.total}</td>
                                <td className="p-4">
                                    <button 
                                        onClick={() => toggleStatus(order.id)}
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Entregado' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                                    >
                                        {order.status}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
