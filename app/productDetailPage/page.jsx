'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import ProductDetailPage from '../../components/user/productDetailPage.jsx';
import ComplexNavbar from "../../components/user/ComplexNavbar.jsx"
const ProductDetailPageWrapper = (_id) => {
    const router = useRouter();    

console.log(_id,"))))))0000000");
    // const id = router.query._id; // Access the query parameter named '_id'
    // console.log(id, "ID from props");

    // if (!id) {
    //     // Handle the case where id is not available yet
    //     return <div>Loading...</div>;
    // }

    return (
        <div>
            <ComplexNavbar />
            <ProductDetailPage id={_id} />
        </div>
    );
};

export default ProductDetailPageWrapper;
