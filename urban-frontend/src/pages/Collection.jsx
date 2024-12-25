import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContex';

const Collection = () => {
    const { products } = useContext(ShopContext)
    console.log(products);
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

            
            
        </div>
    );
};

export default Collection;