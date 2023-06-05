import React from 'react';
import { useForm } from 'react-hook-form';
import { createProduct } from '../api/api';
import { Product } from '../api/interface';

interface AddProductFormProps {
    onAddProduct: (product: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAddProduct }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm<Product>();

    const onSubmit = handleSubmit(async (data) => {
        try {
            const newProduct = await createProduct(data);
            onAddProduct(newProduct);
            reset();
            clearErrors();
        } catch (error) {
            console.error('Error creating product:', error);
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="imageUrl">Image URL:</label>
            <input {...register('imageUrl', { required: true })} type="text" id="imageUrl" />
            {errors.imageUrl && <span>This field is required</span>}

            <label htmlFor="name">Name:</label>
            <input {...register('name', { required: true })} type="text" id="name" />
            {errors.name && <span>This field is required</span>}

            <label htmlFor="count">Count:</label>
            <input {...register('count', { required: true })} type="number" id="count" />
            {errors.count && <span>This field is required</span>}

            <label htmlFor="weight">Weight:</label>
            <input {...register('weight', { required: true })} type="text" id="weight" />
            {errors.weight && <span>This field is required</span>}

            <label htmlFor="width">Width:</label>
            <input {...register('size.width', { required: true })} type="number" id="width" />
            {errors.size?.width && <span>This field is required</span>}

            <label htmlFor="height">Height:</label>
            <input {...register('size.height', { required: true })} type="number" id="height" />
            {errors.size?.height && <span>This field is required</span>}

            <button type="submit">Add</button>
        </form>
    );
};

export default AddProductForm;
