import { Heart } from 'lucide-react';
import { useSecretClicks } from '../../hooks/useSecretClicks';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const handleSecretClick = useSecretClicks(5, 3000, () => navigate('/admin/login'));

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1 space-y-4">
          <h2 className="text-2xl font-black italic uppercase">JEANCOL</h2>
          <p className="text-gray-400 text-sm">Define tu legado.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Tienda</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Inicio</li>
            <li>Categorías</li>
            <li>Ofertas</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Términos</li>
            <li>Privacidad</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-bold">Síguenos</h3>
          <div className="flex gap-4">
            <button onClick={handleSecretClick} className="p-2 hover:text-red-500 transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} JEANCOL. Todos los derechos reservados.
      </div>
    </footer>
  );
}
