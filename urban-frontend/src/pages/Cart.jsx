import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);
    
    useEffect(() => {
        
    },[cartItems])

    return <div>
      
  </div>;
};

export default Cart;
