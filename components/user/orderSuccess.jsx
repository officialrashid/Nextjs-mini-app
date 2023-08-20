import React from 'react';
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useRouter } from 'next/navigation';
const OrderSuccess = () => {
  const router = useRouter()
  return (

    <div

      style={{
        textAlign: 'center',
        padding: '40px 0',
        background: '#EBF0F5',

      }}

      className="card"
    >
      <div
        style={{
          borderRadius: '200px',
          height: '200px',
          width: '200px',
          background: '#F8FAF5',
          margin: '0 auto'
        }}
        className="circle"
      >
        <i
          style={{
            color: '#9ABC66',
            fontSize: '100px',
            lineHeight: '200px',
            marginLeft: '-15px'
          }}
          className="checkmark"
        >
          ✓
        </i>
      </div>
      <h1
        style={{
          color: '#88B04B',
          fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
          fontWeight: 900,
          fontSize: '40px',
          marginBottom: '10px'
        }}
      >
        Success
      </h1>
      <p
        style={{
          color: '#404F5E',
          fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
          fontSize: '20px',
          margin: 0
        }}
      >
        We received your purchase request;
        <br />
        we'll be in touch shortly!
      </p>
      <Button variant="contained" sx={{ marginTop: 3, marginLeft: 5 }} onClick={() => router.push('/')} >
        <AddShoppingCartIcon />
        GO Home</Button >
    </div>
  );
};

export default OrderSuccess;
