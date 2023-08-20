
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GETALL_PRODUCT } from '@/utils/baseUrl/methods/post';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setProductId } from "../../app/redux-toolkit/productId"
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

// ... Other imports ...
// ... Other imports ...

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const router = useRouter()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const getProductResponse = await GETALL_PRODUCT();


        setProducts(getProductResponse.data.products); // Assuming getProductResponse contains a 'products' key
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);
  const handleImageClick = (productId) => {
    console.log(productId, "pppppp0967667");
    dispatch(setProductId(productId))
    router.push('/productDetailPage')

  }
  return (

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>

      {products.length > 0 ? (
        products.map((product) => (

          <Card

            sx={{ maxWidth: 330, marginTop: 3, marginLeft: 3 }}
          >
            <CardMedia
              component="img"
              height="194"
              image={product.image}// Use the actual image URL from the product
              alt=''
              sx={{ cursor: "pointer" }}

              onClick={() => handleImageClick(product._id)}

            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                productName: {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                category:  {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShoppingCartCheckoutIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {product.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}
