import { createContext, useContext, useState, ReactNode } from 'react';
import { MOCK_OFFERS } from '../lib/mockData';

export interface Offer {
    id: string;
    productName: string;
    discount: number;
    active: boolean;
}

interface OfferContextType {
    offers: Offer[];
    addOffer: (offer: Offer) => void;
    updateOffer: (offer: Offer) => void;
    deleteOffer: (id: string) => void;
}

const OfferContext = createContext<OfferContextType | undefined>(undefined);

export const OfferProvider = ({ children }: { children: ReactNode }) => {
    const [offers, setOffers] = useState<Offer[]>(MOCK_OFFERS);

    const addOffer = (offer: Offer) => setOffers([...offers, offer]);
    const updateOffer = (offer: Offer) => setOffers(offers.map(o => o.id === offer.id ? offer : o));
    const deleteOffer = (id: string) => setOffers(offers.filter(o => o.id !== id));

    return (
        <OfferContext.Provider value={{ offers, addOffer, updateOffer, deleteOffer }}>
            {children}
        </OfferContext.Provider>
    );
};

export const useOffers = () => {
    const context = useContext(OfferContext);
    if (!context) throw new Error('useOffers must be used within an OfferProvider');
    return context;
};
