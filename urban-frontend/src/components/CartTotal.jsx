import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"TOTAL"} text2={"CART"}></Title>
      </div>
    </div>
  );
};

export default CartTotal;
