import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Zap, 
  Flame, 
  TrendingUp, 
  Quote,
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  Package,
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { QuickView } from '../components/QuickView';
import { Helmet } from 'react-helmet-async';
import { MarqueeText } from '../components/Animations';
import { ProductCard } from '../components/ProductCard';
import { OffersCarousel } from '../components/store/OffersCarousel';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { useProducts } from '../context/ProductContext';
import { useCategories } from '../context/CategoryContext';

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
  ShoppingBag,
  Package,
  Flame,
  TrendingUp,
  Zap,
};

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  
  const { getStoreName, settings } = useStore();
  const { products: allProducts } = useProducts();
  const { categories } = useCategories();
  
  const storeName = getStoreName();
  
  const productsByCategory = useMemo(() => {
    return categories.map(cat => ({
        ...cat,
        products: allProducts.filter(p => p.category === cat.name)
    }))
  }, [allProducts, categories]);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <Helmet>
        <title>{storeName} | Moda de Lujo y Streetwear Exclusivo</title>
      </Helmet>

      {/* Hero Section */}
      <motion.section 
        style={{ scale, opacity }}
        className="relative min-h-[70vh] md:h-[85vh] w-full overflow-hidden rounded-b-[2rem] md:rounded-b-[4rem]"
      >
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-24 max-w-7xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: 'easeOut' }}
             className="text-white space-y-4 md:space-y-6"
          >
            <span className="inline-block bg-[#C9A84C]/20 text-[#FFD700] text-xs md:text-sm font-bold tracking-[0.3em] uppercase px-4 py-2 rounded-full border border-[#C9A84C]/30 backdrop-blur-sm">
              Nueva Colección
            </span>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9]">Define tu <br /> Legado.</h1>
            <p className="text-white/70 text-base md:text-2xl max-w-lg font-light">Explora nuestra curaduría exclusiva de piezas icónicas diseñadas para destacar.</p>
            <button 
              onClick={() => navigate('/categories')}
              className="mt-8 bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all duration-500 shadow-xl shadow-white/10 hover:scale-105 active:scale-95"
            >
              Explorar Colección
            </button>
          </motion.div>
        </div>
      </motion.section>

      <div className="py-8">
        <OffersCarousel products={allProducts} />
      </div>

      {/* Trust Bar - Enhanced */}
      <section className="py-10 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { icon: Truck, text: 'Envío Gratis' },
                { icon: RotateCcw, text: 'Cambios Fácil' },
                { icon: ShieldCheck, text: 'Pago Seguro' },
                { icon: Headphones, text: 'Soporte 24/7' }
            ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="group flex flex-col items-center gap-3">
                    <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{text}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Featured Products */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="py-20 px-4 md:px-12"
      >
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Productos Destacados</h2>
              <p className="text-gray-500 text-lg">Descubre lo que todos están buscando esta temporada.</p>
            </div>
            <button 
              onClick={() => navigate('/products')} 
              aria-label="Ver todos los productos"
              className="group text-lg font-bold text-accent hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              Ver todos los productos <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
         </div>
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
            {allProducts.filter(p => (p as any).isTrending).slice(0, 10).map((p: Product) => (
                <div key={p.id} className="hover:-translate-y-2 transition-transform duration-300">
                  <ProductCard product={p} />
                </div>
            ))}
         </div>
      </motion.section>

      {/* Categories */}
      {productsByCategory.map(cat => (
         <motion.section 
            key={cat.id} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="py-12 px-4 md:px-12"
         >
            <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-3xl font-bold tracking-tight">{cat.name}</h2>
                <button 
                  onClick={() => navigate(`/categories/${cat.slug}`)} 
                  aria-label={`Ver más de ${cat.name}`}
                  className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                >
                  Ver más →
                </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
                {cat.products.slice(0, 15).map((p: Product) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
         </motion.section>
      ))}

      {/* Newsletter - Polished */}
      <section className="py-24 bg-gray-950 text-white mt-20 rounded-t-[3rem]">
        <div className="max-w-xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Ofertas exclusivas</h2>
            <p className="text-gray-400 text-lg">Suscríbete para recibir descuentos VIP y novedades de estilo.</p>
            <div className="relative mt-8">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  aria-label="Correo electrónico"
                  className="w-full px-8 py-4 rounded-full text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button 
                  className="absolute right-2 top-2 bottom-2 bg-accent text-white px-8 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
                  aria-label="Suscribirse a newsletter"
                >
                  Suscribirse
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};
