import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContex";
import Title from "./Title";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
        );
        setRelated(productsCopy.slice(0,5));
    }
  }, [products]);

    return <div className="my-24">
        <div className="text-center text-3xl py-2">
            <Title text1={'RELATED'} text2={'PRODUCT'}></Title>
      </div>
  </div>;
};

export default RelatedProduct;
