import { ProductCard, Product } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Lo más nuevo</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
            Ver todo
        </button>
      </div>
    </section>
  );
}
