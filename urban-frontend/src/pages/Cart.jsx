import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "../components/Title";

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);
    
    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item]>0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity:cartItems[items][item]
                })
                }
           }
        }
        setCartData(tempData);
    },[cartItems])

    return <div className="border-t pt-14">
        <div className="text-2xl mb-3">
            <Title text1={'YOUR'} text2={'CART'}></Title>
      </div>
  </div>;
};

export default Cart;
