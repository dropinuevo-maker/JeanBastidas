import { ShoppingBag, Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../lib/store';
import { useAuth } from '../../context/AuthContext';

export function Navbar({ onCartOpen }: { onCartOpen: () => void }) {
  const { items } = useCart();
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const isAdminSection = location.pathname.startsWith('/admin');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between transition-all duration-300">
      <Link to="/" className="text-xl font-bold tracking-tighter uppercase italic">JEANCOL</Link>
      <div className="flex items-center gap-6">
        {!isAdminSection && (
            <>
                <Search className="w-5 h-5 cursor-pointer text-foreground hover:text-accent transition-colors" />
                <button onClick={onCartOpen} className="relative group">
                <ShoppingBag className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
                {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                    </span>
                )}
                </button>
            </>
        )}
        {isAuthenticated && (
            <Link to="/admin/dashboard" className="text-foreground hover:text-accent transition-colors">
                <User className="w-5 h-5" />
            </Link>
        )}
      </div>
    </nav>
  );
}
