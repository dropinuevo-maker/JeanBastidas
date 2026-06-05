import { Product } from '../../types';
import { Link } from 'react-router-dom';
import { CountdownTimer } from './CountdownTimer';

export function OffersCarousel({ products }: { products: Product[] }) {
    const offerProducts = products.filter(p => (p as any).isTrending);
    const displayedProducts = [...offerProducts, ...offerProducts, ...offerProducts];

    return (
        <section className="py-8 bg-gray-50 overflow-hidden">
            <div className="flex items-center justify-between mb-4 px-4 max-w-7xl mx-auto">
                <h2 className="text-xl font-bold">Oferta imperdible</h2>
                <Link to="/offers" className="text-sm font-semibold text-accent underline">Ver todas</Link>
            </div>
            
            <div className="flex animate-scroll gap-3 px-4 max-w-7xl mx-auto">
                {displayedProducts.map((product, index) => {
                    const salePrice = product.price * 0.8;
                    const discount = 20;
                    return (
                        <Link to={`/product/${product.slug}`}
                            key={`${product.id}-${index}`} 
                            className="flex-shrink-0 w-48 bg-white p-3 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-1">
                                <div className="flex flex-col bg-yellow-400 p-1.5 rounded text-[10px] font-bold text-center gap-1">
                                    <span>OFERTA IMPERDIBLE</span>
                                    <CountdownTimer expiresAt={new Date(Date.now() + 100000000)} className="justify-center" itemClassName="bg-white text-black" />
                                </div>
                                <h3 className="text-xs font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                                <p className="text-[10px] text-gray-400 line-through">$ {product.price.toLocaleString()}</p>
                                <p className="text-lg font-bold text-gray-900">$ {salePrice.toLocaleString()} <span className="text-[10px] font-bold text-emerald-600">{discount}% OFF</span></p>
                                <p className="text-[10px] font-bold text-emerald-600">{product.shippingInfo || 'Llega gratis de 1-4 días'}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            
            <style>{`
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
