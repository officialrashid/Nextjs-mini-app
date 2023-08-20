"use client"
import React from 'react';
import AddProduct from "../../components/admin/addProduct"
import AdminNavbar from "../../components/admin/adminNavbar"
const addProduct = () => {
    return (
        <div>
            <AdminNavbar />
            <AddProduct />
        </div>
    );
}

export default addProduct;
