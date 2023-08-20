import React, { useEffect, useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    FormControlLabel,
    Radio,
    RadioGroup,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { GETPRODUCT_DETAILS } from '@/utils/baseUrl/methods/get';
import {
    setFullName,
    setCompanyName,
    setStreetAddress,
    setTown,
    setCountry,
    setPostCode,
    setPhone,
    setEmail
} from "../../app/redux-toolkit/orderAddress";
import { useDispatch, useSelector } from "react-redux";
import { ORDER_PRODUCT } from '@/utils/baseUrl/methods/post';
import { useRouter } from 'next/navigation';
const BuyProduct = () => {
    const [products, setProduct] = useState([]);
    const dispatch = useDispatch();
    const router = useRouter()
    const address = useSelector((state) => state.order);
    const data = useSelector((state) => state.register);
    const dataId = useSelector((state) => state.productId);
    const userId = data.userInfo._id
    const fetchProductDetails = async () => {


        const productDetails = await GETPRODUCT_DETAILS(dataId);
        setProduct([productDetails.data.product]);
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const handleOrderSubmit = async (e) => {

        e.preventDefault();
        const orderDetails = {
            ids: data.productId,
            userId: userId,
            address: address
        };
        const order = await ORDER_PRODUCT(orderDetails)
        router.push('/orderSuccess')
    }
    /// add product in forntend area using mui ///
    return (
        <Grid container spacing={3}>
            <Grid item xs={7} md={6}>
                <Box

                    sx={{
                        width: "100%",
                        height: 'auto',
                        borderRadius: 2,
                        margin: 3,
                        marginLeft: 3,
                        boxShadow: 6,



                    }}
                >
                    <Typography fontSize={28} fontWeight={1000} marginLeft={30} >
                        Add Address
                    </Typography>
                    <Box component="form" sx={{ '& .MuiTextField-root': { m: 3, width: '50ch' }, margin: 1, }} noValidate autoComplete="off"  >

                        <div style={{ marginLeft: 50 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="fullName"
                                label="FullName"
                                name="fullName"
                                autoComplete="fullName"
                                autoFocus
                                sx={{ width: "60%" }}
                                onChange={(e) => dispatch(setFullName(e.target.value))}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="companyName"
                                label="CompanyName"
                                name="companyName"
                                autoComplete="companyName"
                                autoFocus
                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setCompanyName(e.target.value))}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="streetAddress"
                                label="StreetAddress"
                                name="streetAddress"
                                autoComplete="streetAddress"
                                autoFocus
                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setStreetAddress(e.target.value))}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="country"
                                label="Country"
                                name="country"
                                autoComplete="country"
                                autoFocus
                                multiline
                                maxRows={5}

                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setCountry(e.target.value))}

                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="town"
                                label="Town/City"
                                name="town"
                                autoComplete="town"
                                autoFocus
                                multiline
                                maxRows={5}

                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setTown(e.target.value))}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="postCode"
                                label="Post Code"
                                name="postCode"
                                autoComplete="postCode"
                                autoFocus
                                multiline
                                maxRows={5}

                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setPostCode(e.target.value))}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="phone"
                                label="Phone"
                                name="phone"
                                autoComplete="phone"
                                autoFocus
                                multiline
                                maxRows={5}

                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setPhone(e.target.value))}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                multiline
                                maxRows={5}

                                sx={{ width: "60%", }}
                                onChange={(e) => dispatch(setEmail(e.target.value))}
                            />


                        </div>



                    </Box>
                </Box>
            </Grid>
            {products.length > 0 && products.map((product) => (
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginTop: 3, marginLeft: 5 }}>
                        <Typography variant="h5">Your Order</Typography>
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Product Image</TableCell>
                                        <TableCell>
                                            <img src={product.image} alt="Product" style={{ width: '100px' }} />
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>{product.productName}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Category</TableCell>
                                        <TableCell>{product.category}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Price</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                    </TableRow>
                                    {/* Repeat similar rows for each product */}
                                    <TableRow>
                                        <TableCell>Shipping</TableCell>
                                        <TableCell>Enter your address to view shipping options.</TableCell>
                                    </TableRow>
                                    <TableRow>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell>{product.price}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Payment Method</TableCell>
                                        <RadioGroup >
                                            <FormControlLabel value="cashOnDelivery" control={<Radio />} label="Cash on Delivery" />
                                            {/* You can repeat similar FormControlLabel for "Use Your Wallet" */}
                                        </RadioGroup>

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, height: 60, width: "56%", backgroundColor: '#131392', ml: 21 }}
                        onClick={handleOrderSubmit}
                    >
                        Submit
                    </Button>
                </Grid>
            ))}

        </Grid>

        // end add product front end *****//////
    );
};

export default BuyProduct;
