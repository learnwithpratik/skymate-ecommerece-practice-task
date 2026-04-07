import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllProducts } from "../api/productApis";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";

const Products = () => {
  let products = useLoaderData();
  console.log(products);
  return (
    <>
      <div className="h-full bg-black text-white flex flex-col items-center justify-center animate-fade-in">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:py-38 gap-6">
          {products.map((elem) => {
            return <ProductCard product={elem} key={elem.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
