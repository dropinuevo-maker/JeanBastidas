import { createContext, useContext, useState, ReactNode } from 'react';

export interface Order {
    id: string;
    customer: string;
    total: string;
    status: 'Entregado' | 'Pendiente';
}

interface OrderContextType {
    orders: Order[];
    toggleStatus: (id: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<Order[]>([
        { id: '#1234', customer: 'Juan Pérez', total: '$1,200,000', status: 'Entregado' },
        { id: '#1235', customer: 'María García', total: '$89,000', status: 'Pendiente' },
    ]);

    const toggleStatus = (id: string) => {
        setOrders(orders.map(order => 
            order.id === id 
                ? { ...order, status: order.status === 'Entregado' ? 'Pendiente' : 'Entregado' }
                : order
        ));
    };

    return (
        <OrderContext.Provider value={{ orders, toggleStatus }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrderContext);
    if (!context) throw new Error('useOrders must be used within an OrderProvider');
    return context;
};
