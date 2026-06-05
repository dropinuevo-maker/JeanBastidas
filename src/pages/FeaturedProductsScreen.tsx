
import { Product } from '../types';
import { ProductCard } from '../components/store/ProductCard';
import { useProducts } from '../context/ProductContext';

export function FeaturedProductsScreen() {
    const { products } = useProducts();
    const featuredProducts = products.filter(p => (p as any).isTrending);

    return (
        <div className="py-8 px-4 md:px-16 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Productos Destacados</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {featuredProducts.map((p: Product) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
