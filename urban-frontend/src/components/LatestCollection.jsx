import React, { useContext } from "react";

import { ShopContext } from "./../context/ShopContex";
import Title from "./Title";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

    return <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={'LATEST'} text2={'COLLECTION'}></Title>
      </div>
  </div>;
};

export default LatestCollection;
