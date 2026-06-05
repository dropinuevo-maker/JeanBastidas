import { Link } from 'react-router-dom';
import React from 'react';

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  description: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const salePrice = (product as any).isTrending ? product.price * 0.8 : product.price;
  const isOffer = (product as any).isTrending;
  const discount = isOffer ? 20 : 0;

  return (
    <Link to={`/product/${product.slug}`} className="group block bg-white rounded-xl p-3 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-1">
        {isOffer && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded">OFERTA</span>
            <span className="text-[10px] text-gray-400 line-through">${product.price.toLocaleString('es-CO')}</span>
          </div>
        )}
        <p className="font-extrabold text-lg text-gray-900">${salePrice.toLocaleString('es-CO')}</p>
        <p className="text-[11px] font-medium text-emerald-600">3 cuotas de ${(salePrice / 3).toLocaleString('es-CO', {maximumFractionDigits:0})} sin interés</p>
        <h3 className="font-medium text-xs text-gray-700 line-clamp-2 leading-tight">{product.name}</h3>
        <p className="text-[11px] font-bold text-emerald-600 pt-1">{product.shippingInfo || 'Llega gratis en 1-4 días'}</p>
      </div>
    </Link>
  );
};
