import { Product } from '../types';
import { Offer } from '../context/OfferContext';

export const MOCK_OFFERS: Offer[] = [
    { id: '1', productName: 'Camiseta Básica Premium', discount: 20, active: true },
    { id: '2', productName: 'Zapatillas Urbanas', discount: 15, active: true },
];

export const MOCK_PRODUCTS: Product[] = [
  // Ropa
  { id: '1', name: 'Camiseta Básica Premium', slug: 'camiseta-basica-premium', price: 89000, images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80'], description: 'Camiseta de algodón pima.', category: 'Ropa' },
  { id: '2', name: 'Jeans Slim Fit', slug: 'jeans-slim-fit', price: 159000, images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80'], description: 'Jeans cómodos.', category: 'Ropa' },
  { id: '3', name: 'Chaqueta de Cuero', slug: 'chaqueta-de-cuero', price: 499000, images: ['https://images.unsplash.com/photo-1551028719-00167b16e754?w=500&q=80'], description: 'Estilo atemporal.', category: 'Ropa', isTrending: true },
  
  // Accesorios
  { id: '4', name: 'Reloj Minimalista', slug: 'reloj-minimalista', price: 129000, images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'], description: 'Diseño elegante.', category: 'Accesorios' },
  { id: '5', name: 'Billetera de Cuero', slug: 'billetera-de-cuero', price: 159000, images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80'], description: 'Segura RFID.', category: 'Accesorios' },
  { id: '6', name: 'Gafas de Sol', slug: 'gafas-de-sol', price: 89000, images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80'], description: 'Modernas.', category: 'Accesorios', isTrending: true },
  
  // Calzado
  { id: '7', name: 'Zapatillas Urbanas', slug: 'zapatillas-urbanas', price: 249000, images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'], description: 'Para diario.', category: 'Calzado' },
  { id: '8', name: 'Botas de Cuero', slug: 'botas-de-cuero', price: 349000, images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'], description: 'Resistentes.', category: 'Calzado', isTrending: true },
  { id: '9', name: 'Zapatos Formales', slug: 'zapatos-formales', price: 299000, images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80'], description: 'Elegantes.', category: 'Calzado' },
  
  // Tecnología
  { id: '10', name: 'Smartwatch Pro', slug: 'smartwatch-pro', price: 699000, images: ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80'], description: 'Salud avanzada.', category: 'Tecnología', isTrending: true },
  { id: '11', name: 'Auriculares ANC', slug: 'auriculares-anc', price: 349000, images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'], description: 'Cancelación ruido.', category: 'Tecnología', isTrending: true },
  { id: '12', name: 'Altavoz Bluetooth', slug: 'altavoz-bluetooth', price: 199000, images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'], description: 'Portátil.', category: 'Tecnología' },
  
  // Destacados
  { id: '13', name: 'Cámara Fotográfica', slug: 'camara-foto', price: 1200000, images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80'], description: 'Calidad profesional.', category: 'Tecnología', isTrending: true },
  { id: '14', name: 'Lámpara de Estudio', slug: 'lampara', price: 89000, images: ['https://images.unsplash.com/photo-1513506003901-1e6a239e2cb8?w=500&q=80'], description: 'Iluminación perfecta.', category: 'Accesorios' },
];
