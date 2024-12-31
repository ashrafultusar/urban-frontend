import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "../components/Title";
import index from "toastify";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
          <div className="text-2xl">
              <Title text1={'my'} text2={'order'}></Title>
     
              <div>
                  {
                      products.slice(1, 4).map((item, index) => (
                          <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              <div>
                                  
                              </div>
                          </div>
                      ))
                  }
     </div>
              
          </div>
    </div>
  );
};

export default Orders;
