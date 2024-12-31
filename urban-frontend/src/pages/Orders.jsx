import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
          <div className="text-2xl">
              <Title text1={'my'} text2={'order'}></Title>
      </div>
    </div>
  );
};

export default Orders;
