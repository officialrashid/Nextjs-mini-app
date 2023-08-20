"use client"
import React from 'react';
import AllProduct from "../../components/admin/allProducts"
import AdminNavbar from "../../components/admin/adminNavbar"
const allProduct = () => {
    return (
        <div>
             <AdminNavbar />
           <AllProduct />
        </div>
    );
}

export default allProduct;
