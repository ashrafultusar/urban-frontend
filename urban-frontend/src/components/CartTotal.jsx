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
                  <p>Subtotal</p>
                  <p>{currency}{ getCartAmount()}.00</p>
              </div>
              <hr />
              <div className="flex justify-between">
                  <p>Shipping Cost</p>
                  <p>{currency}{ delivery_fee}</p>
              </div>
      </div>
    </div>
  );
};

export default CartTotal;
