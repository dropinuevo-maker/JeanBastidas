
import React, { useState } from 'react';
import { useCategories } from '../../context/CategoryContext';
import { Trash2, Plus } from 'lucide-react';
import { Modal } from '../../components/admin/Modal';

export const AdminCategories = () => {
    const { categories, addCategory, deleteCategory } = useCategories();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        addCategory({ id: Date.now().toString(), name: newCategoryName });
        setNewCategoryName('');
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Gestión de Categorías</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90">
                    <Plus size={18} /> Nueva Categoría
                </button>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4">Nombre</th>
                            <th className="p-4">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id} className="border-b last:border-b-0 hover:bg-gray-50">
                                <td className="p-4 font-medium">{category.name}</td>
                                <td className="p-4">
                                    <button onClick={() => deleteCategory(category.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={18} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nueva Categoría">
                <form onSubmit={handleAdd} className="space-y-4">
                    <input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} placeholder="Nombre de categoría" className="w-full p-2 border rounded-lg" required />
                    <button type="submit" className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90">Guardar</button>
                </form>
            </Modal>
        </div>
    );
};
