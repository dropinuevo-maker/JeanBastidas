import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../lib/store';

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity } = useCart();
  const subtotal = items.reduce((acc, item) => acc + (item.salePrice || item.price) * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Tu carrito ({items.reduce((acc, i) => acc + i.quantity, 0)})</h2>
              <button onClick={onClose}><X /></button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-4">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variation}-${item.size}`} className="flex gap-4 items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                    <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item.variation} - {item.size}</p>
                        <div className="flex items-center gap-2 mt-2">
                             <button onClick={() => updateQuantity(item.productId, item.variation, item.size, Math.max(1, item.quantity - 1))} className="p-1"><Minus className="w-3 h-3"/></button>
                             <span className="text-xs">{item.quantity}</span>
                             <button onClick={() => updateQuantity(item.productId, item.variation, item.size, item.quantity + 1)} className="p-1"><Plus className="w-3 h-3"/></button>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold">${((item.salePrice || item.price) * item.quantity).toLocaleString()}</p>
                        <button onClick={() => removeItem(item.productId, item.variation, item.size)} className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4"/></button>
                    </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-4">
                <div className="flex justify-between font-bold mb-4">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                </div>
                <button className="w-full bg-black text-white py-3 rounded-full font-bold">Comprar</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
