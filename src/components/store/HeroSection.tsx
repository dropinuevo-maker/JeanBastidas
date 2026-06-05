import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.2em] font-medium uppercase mb-4">Nueva Colección</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Estilo Sin Límites</h1>
          <p className="text-white/80 text-lg mb-8 max-w-md">Descubre nuestra última selección de productos diseñados para resaltar tu personalidad.</p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#C9A84C] hover:text-white transition-colors duration-300">
            Explorar Colección →
          </button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-[10%] w-full flex justify-center">
         <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
           <p>Buscar productos...</p>
         </div>
      </div>
    </section>
  );
}
