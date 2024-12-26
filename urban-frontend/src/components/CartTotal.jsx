import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContex';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div>
            
        </div>
    );
};

export default CartTotal;