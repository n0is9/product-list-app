import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../api/api';
import { ProductResp } from '../api/interface';
import EditProductForm from '../components/EditProductForm';

const ProductView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductResp | null>(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const productData = await getProduct(Number(id));
            setProduct(productData);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setEditing(false);
        fetchProduct();
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
            <div className='p-10 flex justify-evenly bg-lime-100'>
                <div className='w-2/6'>
                    <img src={product.imageUrl} alt="" />
                </div>
                <div className='text-2xl'>
                    <h2 className='text-4xl pb-2'>{product.name}</h2>
                    <p className='pb-2'>Count: {product.count}</p>
                    <p className='pb-2'>Weight: {product.weight}</p>
                    <p className='pb-2'>Width: {product.size.width}</p>
                    <p className='pb-5'>Height: {product.size.height}</p>
                    {editing ? (
                        <EditProductForm product={product} onSave={handleSave} />
                    ) : (
                        <div>
                            <button onClick={handleEditClick}>Edit info</button>
                        </div>
                    )}
                </div>
            </div>

    );
};

export default ProductView;
