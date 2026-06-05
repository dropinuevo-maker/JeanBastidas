
import { useState } from 'react';
import { Product } from '../../types';
import { useProducts } from '../../context/ProductContext';
import { Pencil, Trash2, Plus, Package } from 'lucide-react';
import { Modal } from '../../components/admin/Modal';
import { ProductForm } from '../../components/admin/ProductForm';

export const AdminProducts = () => {
    const { products, deleteProduct, addProduct, updateProduct } = useProducts();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | undefined>(undefined);

    const handleOpenModal = (product?: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleSubmit = (product: Product) => {
        if (editingProduct) {
            updateProduct(product);
        } else {
            addProduct(product);
        }
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-accent/10 text-accent rounded-xl">
                        <Package size={28} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Gestión de Productos</h1>
                        <p className="text-gray-500">Administra y organiza tus productos.</p>
                    </div>
                </div>
                <button onClick={() => handleOpenModal()} className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                    <Plus size={20} /> Nuevo Producto
                </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Producto</th>
                            <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Precio</th>
                            <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                            <th className="p-6 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="p-6 flex items-center gap-4">
                                    <img src={product.images[0]} alt={product.name} className="w-14 h-14 rounded-xl object-cover shadow-sm bg-gray-100" />
                                    <span className="font-semibold text-gray-900">{product.name}</span>
                                </td>
                                <td className="p-6 text-gray-700 font-medium">$ {product.price.toLocaleString()}</td>
                                <td className="p-6">
                                    <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">10 unidades</span>
                                </td>
                                <td className="p-6 flex gap-2 justify-end">
                                    <button onClick={() => handleOpenModal(product)} className="p-2 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"><Pencil size={18} /></button>
                                    <button onClick={() => deleteProduct(product.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={editingProduct ? 'Editar Producto' : 'Nuevo Producto'}>
                <ProductForm product={editingProduct} onSubmit={handleSubmit} />
            </Modal>
        </div>
    );
};

