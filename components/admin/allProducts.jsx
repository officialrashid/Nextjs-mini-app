import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GETALL_PRODUCT } from '@/utils/baseUrl/methods/post';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const getProductResponse = await GETALL_PRODUCT();
        setProducts(getProductResponse.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <><TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, marginTop: 3 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Image</StyledTableCell>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow key={product.id}>
              <StyledTableCell>
                <img src={product.image} alt={product.productName} style={{ maxWidth: '100px' }} />
              </StyledTableCell>
              <StyledTableCell>{product.productName}</StyledTableCell>
              <StyledTableCell>{product.category}</StyledTableCell>
              <StyledTableCell>{product.price}</StyledTableCell>
              <StyledTableCell>{product.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

    </TableContainer><Button variant="contained" disableElevation sx={{ marginTop: 3, width: "70%", marginLeft: 24 }}
      onClick={() => router.push('addProduct')}>
        Add Product
      </Button></>
  );
}
