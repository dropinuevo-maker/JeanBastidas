import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
    productId: string;
    name: string;
    price: number;
    salePrice?: number;
    quantity: number;
    image: string;
    variation?: string;
    size?: string;
};

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (productId: string, variation?: string, size?: string) => void;
    updateQuantity: (productId: string, variation: string | undefined, size: string | undefined, quantity: number) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (item) => set((state) => {
                const existingItem = state.items.find(
                    (i) => i.productId === item.productId && i.variation === item.variation && i.size === item.size
                );
                if (existingItem) {
                    return {
                        items: state.items.map((i) =>
                            i.productId === item.productId && i.variation === item.variation && i.size === item.size
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                    };
                }
                return { items: [...state.items, item] };
            }),
            removeItem: (productId, variation, size) => set((state) => ({
                items: state.items.filter((i) => !(i.productId === productId && i.variation === variation && i.size === size))
            })),
            updateQuantity: (productId, variation, size, quantity) => set((state) => ({
                items: state.items.map((i) =>
                    i.productId === productId && i.variation === variation && i.size === size
                        ? { ...i, quantity }
                        : i
                )
            })),
            clearCart: () => set({ items: [] }),
        }),
        { name: 'cart-storage' }
    )
);
