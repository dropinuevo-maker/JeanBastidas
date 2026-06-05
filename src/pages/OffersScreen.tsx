import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/store/ProductCard';
import { Helmet } from 'react-helmet-async';

export const OffersScreen = () => {
  const { products } = useProducts();
  const offerProducts = products.filter(p => (p as any).isTrending);

  return (
    <div className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Ofertas Activas | JEANCOL</title>
      </Helmet>
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">🔥 Ofertas del Momento</h1>
        <p className="text-gray-600">Tiempo limitado. No te lo pierdas.</p>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {offerProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {offerProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          Sin ofertas activas por el momento.
        </div>
      )}
    </div>
  );
};
