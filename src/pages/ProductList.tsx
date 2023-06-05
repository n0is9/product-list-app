import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getProducts, deleteProduct, createProduct } from '../api/api';
import { ProductResp, Product } from '../api/interface';
import { LuTrash } from 'react-icons/lu';
import AddProductForm from '../components/AddProductForm';

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<ProductResp[]>([]);
    const [showAddProductForm, setShowAddProductForm] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const productsData = await getProducts();
            setProducts(productsData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleAddProduct = async (product: Product) => {
        try {
            const newProduct = await createProduct(product);
            setProducts((prevProducts) => [newProduct, ...prevProducts]);
            setShowAddProductForm(false);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (id: number) => {
        try {
            await deleteProduct(id);
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const toggleAddProductForm = () => {
        setShowAddProductForm((prevValue) => !prevValue);
    };

    return (
        <div className="bg-lime-100">
            <div className="p-10 flex justify-evenly">
                <button onClick={toggleAddProductForm}>Add a cat</button>
            </div>
            <div>
                {showAddProductForm && <AddProductForm onAddProduct={handleAddProduct} />}
            </div>
            <div className="flex items-center flex-wrap">
                {products.map((product) => (
                    <div key={product.id} className="p-10 w-1/4">
                        <NavLink to={`/product/${product.id}`}>
                            <img className="hover:scale-105 ease-in-out duration-100" src={product.imageUrl} alt="" />
                        </NavLink>

                        <div className="flex justify-evenly pt-3">
                            <h2 className="font-semibold text-2xl mt-3">{product.name}</h2>
                            <button className="pt-4" onClick={() => handleDeleteProduct(product.id)}>
                                <LuTrash
                                    size={24}
                                    className="hover:text-red-700 hover:scale-125 transition-colors ease-in-out duration-100"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default ProductList;
