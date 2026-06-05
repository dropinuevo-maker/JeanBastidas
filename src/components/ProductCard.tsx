import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { MOCK_OFFERS } from '../lib/mockData';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const offer = MOCK_OFFERS.find(o => o.productName === product.name && o.active);
  const discountedPrice = offer ? product.price - (product.price * offer.discount / 100) : null;

  return (
    <Link to={`/product/${product.slug}`} className="group block bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 relative flex flex-col h-full">
      <div className="aspect-[1080/1120] bg-white flex items-center justify-center p-2 relative overflow-hidden rounded-t-xl group-hover:opacity-90 transition-opacity">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {offer && <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">-{offer.discount}%</div>}
      </div>
      
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-xs sm:text-sm leading-tight line-clamp-2 min-h-[2.5em]">{product.name}</h3>
        
        {/* Price */}
        <div className="flex flex-wrap items-center gap-1.5 mt-2">
            <p className={`text-base sm:text-xl font-extrabold text-gray-950 ${offer ? 'text-red-600' : ''}`}>
                ${(discountedPrice || product.price).toLocaleString('es-CO')}
            </p>
            {offer && (
                <p className="text-[10px] sm:text-xs font-medium text-gray-400 line-through">
                    ${product.price.toLocaleString('es-CO')}
                </p>
            )}
        </div>
        
        {/* Shipping */}
        <p className="text-[9px] uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full w-fit mt-1.5">Envío gratis</p>
        
        {/* Add to cart button - fixed position inside card */}
        <div className="mt-auto pt-4 flex justify-end">
            <div className="bg-gray-900 text-white p-2 sm:p-2.5 rounded-full hover:bg-accent transition-colors shadow-md">
                <ShoppingCart size={16} />
            </div>
        </div>
      </div>
    </Link>
  );
};
