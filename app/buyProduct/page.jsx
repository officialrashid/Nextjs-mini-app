"use client"
import React from 'react';
import BuyProduct from '@/components/user/buyProduct';
import ComplexNavbar from "../../components/user/ComplexNavbar"
const buyProduct = (id) => {
    console.log(id ,"id coming to the buy product componets");
    return (
        <div>
            <ComplexNavbar />
            <BuyProduct id={id} />
        </div>
    );
}

export default buyProduct;
