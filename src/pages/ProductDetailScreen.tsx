import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../lib/store';
import { ArrowLeft, ShoppingCart, MessageCircle, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export const ProductDetailScreen = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
  const { addItem } = useCart();
  
  const product = products.find(p => p.slug === slug);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="pt-32 text-center text-gray-500">Producto no encontrado</div>;

  const handleAddToCart = () => {
    addItem({ 
        productId: product.id, 
        name: product.name, 
        price: product.price, 
        salePrice: (product as any).isTrending ? product.price * 0.8 : undefined,
        quantity, 
        image: product.images[0]
    });
  };

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <Helmet>
            <title>{product.name} | JEANCOL</title>
        </Helmet>
        
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 flex items-center text-xs font-semibold uppercase tracking-widest text-[#C9A84C] hover:text-[#A8892E] transition-colors"
        >
            <ArrowLeft size={16} className="mr-2" /> Volver a comprar
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery Section - Sticky on Desktop */}
            <div className="md:sticky md:top-28 self-start">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-sm">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                </div>
                {/* Simple thumbnail gallery placeholder if more images existed */}
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-pointer ring-2 ring-black">
                         <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
            
            {/* Info Section */}
            <div className="space-y-8">
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest bg-gray-100 px-3 py-1 rounded-full text-gray-600">Nuevo Ingreso</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">{product.name}</h1>
                    <div className="text-3xl font-bold tracking-tight text-gray-900 pt-2">
                        ${product.price.toLocaleString('es-CO')}
                    </div>
                </div>

                <div className="text-sm text-gray-600 leading-relaxed max-w-md">
                    <p>{product.description}</p>
                </div>

                <div className="space-y-4">
                     <h3 className="font-semibold text-xs text-gray-400 uppercase tracking-wider">Beneficios</h3>
                     <ul className="space-y-3">
                        {['Diseño ergonómico pensado en ti', 'Materiales premium de larga duración', 'Acabados de lujo, estilo atemporal', 'Exclusividad garantizada'].map(f => (
                            <li key={f} className="flex items-center gap-3 text-sm text-gray-800">
                                <span className="bg-[#C9A84C]/10 text-[#C9A84C] p-1 rounded-full"><ChevronRight size={14} /></span> {f}
                            </li>
                        ))}
                     </ul>
                </div>
                
                {/* Buy Section */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                        <input 
                            type="number" 
                            min="1" 
                            value={quantity} 
                            onChange={e => setQuantity(Number(e.target.value))} 
                            className="w-20 h-14 border border-gray-200 rounded-full text-center font-bold text-lg focus:outline-none focus:border-black transition-all"
                        />
                        <button 
                            onClick={handleAddToCart} 
                            className="flex-1 bg-black text-white h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#C9A84C] hover:text-white transition-all shadow-lg hover:shadow-black/20"
                        >
                            <ShoppingCart size={20} /> Añadir
                        </button>
                    </div>
                    <button className="w-full bg-white border-2 border-black text-black h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all">
                        Comprar ahora
                    </button>
                    <button className="w-full bg-[#25D366] text-white h-14 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-md">
                        <MessageCircle size={20} /> Comprar por WhatsApp
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};
