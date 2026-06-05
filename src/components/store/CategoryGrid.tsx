import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Ropa', count: 12, slug: 'ropa', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500&q=80' },
  { name: 'Accesorios', count: 8, slug: 'accesorios', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80' },
  { name: 'Calzado', count: 15, slug: 'calzado', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
  { name: 'Tecnología', count: 5, slug: 'tecnologia', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500&q=80' },
];

export function CategoryGrid() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Colecciones</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg group"
          >
            <img src={cat.image} alt={cat.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] p-4 flex flex-col justify-end">
              <h3 className="text-white font-bold text-lg">{cat.name}</h3>
              <p className="text-white/70 text-sm">{cat.count} productos</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
