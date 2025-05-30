import axios from 'axios';

export const fetchProducts = () => axios.get('https://cart-api.alexrodriguez.workers.dev/products');

export const fetchProductsByID = (id) => axios.get(`https://cart-api.alexrodriguez.workers.dev/products/${id}`);