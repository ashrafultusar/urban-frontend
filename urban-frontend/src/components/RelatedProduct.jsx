import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContex';

const RelatedProduct = ({ category, subCategory }) => {
    
    const{products}=useContext(ShopContext)
const [related,setRelated]=useState([])

    useEffect(() => {
        
        if (products.length>0) {
            let productsCopy = products.slice();
            
    }

    }, [products])
    
    return (
        <div>
            
        </div>
    );
};

export default RelatedProduct;