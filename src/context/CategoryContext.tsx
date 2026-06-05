import { createContext, useContext, useState, ReactNode } from 'react';

interface Category {
    id: string;
    name: string;
}

interface CategoryContextType {
    categories: Category[];
    loading: boolean;
    addCategory: (category: Category) => void;
    deleteCategory: (id: string) => void;
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
    const [categories, setCategories] = useState<Category[]>([
        { id: '1', name: 'Electrónica' },
        { id: '2', name: 'Ropa' }
    ]);
    const [loading] = useState(false);

    const addCategory = (category: Category) => setCategories([...categories, category]);
    const deleteCategory = (id: string) => setCategories(categories.filter(c => c.id !== id));

    return (
        <CategoryContext.Provider value={{ categories, loading, addCategory, deleteCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (!context) throw new Error('useCategories must be used within a CategoryProvider');
    return context;
};
