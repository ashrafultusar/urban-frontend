import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContex';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    
    const { currency } = useContext(ShopContext);

    return (
        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
            <div className=''>

            </div>
        </Link>
    );
};

export default ProductItem;