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
          <div className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                  <p></p>
                  <p></p>
              </div>
      </div>
    </div>
  );
};

export default CartTotal;
