// import section star area //
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField, Button, Typography, } from '@mui/material'
import { setProductName, setCategory, setPrice, setDescription, setImage } from "../../app/redux-toolkit/addProduct"
import api from "axios"
import cloudinary from 'cloudinary-core';
import { ADDPRODUCT_API } from '@/utils/baseUrl/methods/post';
import addProduct from '@/app/addProduct/page';
import { useRouter } from 'next/navigation';
//import section end //////
const cl = cloudinary.Cloudinary.new({ cloud_name: 'dz9pszn6y' });
const AddStocksForm = () => {
    const data = useSelector((state) => state.addProduct);
    const ProductImage = useSelector((state) => state.addProduct.image);
    const router = useRouter();
    const dispatch = useDispatch();
    const [prevUrl, setPrevUrl] = useState();


    const handleProductSubmit = (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('file', ProductImage);
            formData.append('upload_preset', 'ypnvfoyt');
            console.log(formData, "error occurr");
            api.post('https://api.cloudinary.com/v1_1/dz9pszn6y/image/upload', formData, {
                withCredentials: false
            }).then(async (response) => {
                let url = response.data.secure_url;
                if (url === prevUrl) {
                    return false;
                } else {
                    const newData = {
                        productName: data.productName,
                        category: data.category,
                        price: data.price,
                        description: data.description,
                        image: response.data.secure_url
                    }
                    setPrevUrl(response.data.secure_url)
                    addProductApi(newData)
                }


            }).catch((error) => {
                console.log(error, "error in the cloudinary response");
            })


        } catch (error) {

            console.log(error, "error in the add Product");

        }
    }
    const addProductApi = async (data) => {
        const response = await ADDPRODUCT_API(data)
        if (response) {
            router.push('/allProduct')
        }
    }
    /// add product in forntend area using mui ///
    return (
        <Box

            sx={{
                width: "70%",
                height: 'auto',
                borderRadius: 2,
                margin: 3,
                marginLeft: 30,
                boxShadow: 6,



            }}
        >
            <Typography fontSize={28} fontWeight={1000} marginLeft={40} >
                Add Product
            </Typography>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 3, width: '50ch' }, margin: 1, }} noValidate autoComplete="off" onSubmit={handleProductSubmit} >

                <div style={{ marginLeft: 150 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="productName"
                        label="productName"
                        name="productName"
                        autoComplete="productName"
                        autoFocus
                        sx={{ width: "60%" }}
                        onChange={(e) => dispatch(setProductName(e.target.value))}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="category"
                        label="category"
                        name="category"
                        autoComplete="category"
                        autoFocus
                        sx={{ width: "60%", }}
                        onChange={(e) => dispatch(setCategory(e.target.value))}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="price"
                        label="price"
                        name="price"
                        autoComplete="Job  Timing"
                        autoFocus
                        sx={{ width: "60%", }}
                        onChange={(e) => dispatch(setPrice(e.target.value))}
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="description"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        multiline
                        maxRows={5}

                        sx={{ width: "60%", }}
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                    />

                    <TextField
                        margin="normal"
                        type='file'
                        required
                        fullWidth
                        id="image"
                        label="image"
                        name="image"
                        autoComplete="image"
                        autoFocus
                        onChange={(e) => dispatch(setImage(e.target.files[0]))}

                    />


                </div>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, height: 60, width: "56%", backgroundColor: '#131392', ml: 21 }} >
                    Submit
                </Button>


            </Box>
        </Box>
        // end add product front end *****//////
    );
};

export default AddStocksForm;
