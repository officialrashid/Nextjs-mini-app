"use client"
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { GETPRODUCT_DETAILS } from "../../utils/baseUrl/methods/get"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// ... (imports and other code)

// ... (imports and other code)

export default function ProductDetailPage() {
  const [expanded, setExpanded] = useState(false);
  const [products, setProduct] = useState([]);
  const router = useRouter()
  const data = useSelector((state) => state.productId);
  const handleBuyProductClick = () => {
    router.push(`/buyProduct`)
  }
  useEffect(async () => {
    const productDetails = await GETPRODUCT_DETAILS(data);
    setProduct([productDetails.data.product]);

  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {products.length > 0 && products.map((product) => (
        <div key={product._id} style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Card sx={{ maxWidth: 700, marginTop: 5, marginLeft: 10, width: 600 }}>
            <CardMedia
              component="img"
              style={{ maxHeight: 400, width: '100%', objectFit: 'contain' }}
              image={product.image} // Use the actual image URL from the product
              alt=""
              sx={{ cursor: 'pointer' }}
            />
          </Card>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" component="h2" sx={{ marginTop: 5, marginLeft: 5 }}>
              Product Name:- {product.productName}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ marginTop: 3, marginLeft: 5 }}>
              Category:- {product.category}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ marginTop: 5, marginLeft: 5 }}>
              Price:- ${product.price}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ marginTop: 5, marginLeft: 5 }}>
              Description:- {product.description}
            </Typography>
            <Button variant="contained" sx={{ marginTop: 5, marginLeft: 5 }}>
              <AddShoppingCartIcon />
              ADD TO CART</Button >
            <Button variant="contained" sx={{ marginTop: 3, marginLeft: 5 }} onClick={() => handleBuyProductClick()} >

              {/* <AddShoppingCartIcon /> */}
              BUY NOW</Button >
          </div>
        </div>
      ))}
    </div>
  );
}
