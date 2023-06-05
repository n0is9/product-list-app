import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { updateProduct } from '../api/api';
import { ProductResp } from '../api/interface';

interface EditProductFormProps {
    product: ProductResp;
    onSave: () => void;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ product, onSave }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProductResp>();

    const onSubmit: SubmitHandler<ProductResp> = async (data) => {
        try {
            await updateProduct(product.id, data);
            onSave();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' mb-3 rounded-2xl border-gray-800 border-2 px-5 py-1'>
                <label htmlFor="imageUrl" className='pr-5'>Image URL:</label>
                <input className='bg-transparent outline-none' type="text" id="imageUrl" defaultValue={product.imageUrl} {...register('imageUrl', { required: true })} />
                {errors.imageUrl && <span>This field is required</span>}
            </div>
            <div className='mb-3 rounded-2xl border-gray-800 border-2 px-5 py-1'>
                <label htmlFor="name" className='pr-5'>Name:</label>
                <input className='bg-transparent outline-none' type="text" id="name" defaultValue={product.name} {...register('name', { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className='mb-3 rounded-2xl border-gray-800 border-2 px-5 py-1'>
                <label htmlFor="count" className='pr-5'>Count:</label>
                <input className='bg-transparent outline-none' type="number" id="count" defaultValue={product.count} {...register('count', { required: true })} />
                {errors.count && <span>This field is required</span>}
            </div>
            <div className='mb-3 rounded-2xl border-gray-800 border-2 px-5 py-1'>
                <label htmlFor="weight" className='pr-5'>Weight:</label>
                <input className='bg-transparent outline-none' type="text" id="weight" defaultValue={product.weight} {...register('weight', { required: true })} />
                {errors.weight && <span>This field is required</span>}
            </div>
            <div className='mb-3 rounded-2xl border-gray-800 border-2 px-5 py-1'>
                <label htmlFor="width" className='pr-5'>Width:</label>
                <input className='bg-transparent outline-none' type="number" id="width" defaultValue={product.size.width} {...register('size.width', { required: true })} />
                {errors.size?.width && <span>This field is required</span>}
            </div>
            <div className='mb-3 rounded-2xl border-gray-800 border-2 px-5 py-1'>
                <label htmlFor="height" className='pr-5'>Height:</label>
                <input className='bg-transparent outline-none' type="number" id="height" defaultValue={product.size.height} {...register('size.height', { required: true })} />
                {errors.size?.height && <span>This field is required</span>}
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default EditProductForm;
