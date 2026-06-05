import React, { useState } from 'react';
import { useOffers } from '../../context/OfferContext';
import { Trash2, Plus, Tag } from 'lucide-react';
import { Modal } from '../../components/admin/Modal';

export const AdminOffers = () => {
    const { offers, addOffer, updateOffer, deleteOffer } = useOffers();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productName, setProductName] = useState('');
    const [discount, setDiscount] = useState(0);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        addOffer({ id: Date.now().toString(), productName, discount, active: true });
        setProductName('');
        setDiscount(0);
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Gestión de Ofertas</h1>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90">
                    <Plus size={18} /> Nueva Oferta
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                            <div className="bg-orange-100 text-orange-700 p-2 rounded-lg">
                                <Tag size={20} />
                            </div>
                            <div className="flex items-center gap-2">
                                <label className="text-xs font-medium text-gray-500">Activa:</label>
                                <input 
                                    type="checkbox" 
                                    checked={offer.active} 
                                    onChange={() => updateOffer({ ...offer, active: !offer.active })}
                                    className="rounded text-accent focus:ring-accent"
                                />
                                <button onClick={() => deleteOffer(offer.id)} className="text-gray-400 hover:text-red-500 ml-2"><Trash2 size={18} /></button>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{offer.productName}</h3>
                            <p className="text-3xl font-extrabold text-accent mt-2">{offer.discount}% OFF</p>
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nueva Oferta">
                <form onSubmit={handleAdd} className="space-y-4">
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Nombre del producto" className="w-full p-2 border rounded-lg" required />
                    <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} placeholder="Descuento %" className="w-full p-2 border rounded-lg" required />
                    <button type="submit" className="w-full bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90">Guardar</button>
                </form>
            </Modal>
        </div>
    );
};
