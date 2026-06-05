import { useCategories } from '../context/CategoryContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const CategoriesScreen = () => {
  const { categories } = useCategories();

  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Categorías | JEANCOL</title>
      </Helmet>
      <h1 className="text-4xl font-black italic uppercase mb-12">Categorías</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((c: any) => (
          <Link key={c.id} to={`/category/${c.slug}`} className="group relative block aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">{c.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
