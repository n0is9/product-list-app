import axios from 'axios';
import { Comment, Product, ProductResp } from './interface';

export const API_BASE_URL = 'http://localhost:8000';

export const getProducts = async (): Promise<ProductResp[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
};

export const createProduct = async (product: Product) => {
    const response = await axios.post(`${API_BASE_URL}/products`, product);
    return response.data;
};

export const deleteProduct = async (id: number) => {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
};

export const updateProduct = async (id: number, product: Product) => {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, product);
    return response.data;
};

export const getProduct = async (productId: number) => {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data;
};
