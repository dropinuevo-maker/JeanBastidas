import React, { useState } from 'react';
import { Product } from '../../types';

interface ProductFormProps {
    product?: Product;
    onSubmit: (product: Product) => void;
}

export const ProductForm = ({ product, onSubmit }: ProductFormProps) => {
    const [formData, setFormData] = useState<Product>(product || {
        id: Date.now().toString(),
        name: '',
        slug: '',
        price: 0,
        images: [''],
        description: '',
        category: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre del producto</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all" required />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Precio</label>
                <input type="number" value={formData.price} onChange={(e) => setFormData({...formData, price: Number(e.target.value)})} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all" required />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">URLs de imágenes (separadas por comas)</label>
                <input type="text" value={formData.images.join(',')} onChange={(e) => setFormData({...formData, images: e.target.value.split(',')})} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all" required />
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                Guardar Producto
            </button>
        </form>
    );
};
