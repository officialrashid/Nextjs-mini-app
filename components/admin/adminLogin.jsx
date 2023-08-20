import React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';


function AdminLogin() {


  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            marginLeft: 80,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt=""
          src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-4.svg"
        />
        <Typography component="h1" variant="h5" sx={{ fontSize: 12, fontWeight: 500, color: "blue", marginBottom: 4 }}>
          Welcome back!
        </Typography>
        <Typography component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000 }}>
          Admin login
        </Typography>

        <Divider>Or Continue with</Divider>
        <Box component="form" sx={{ paddingLeft: 20 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ width: "70%" }}
            onChange={(e) => dispatch(setLoginEmail(e.target.value))}

          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ width: "70%" }}
            onChange={(e) => dispatch(setLoginPassword(e.target.value))}

          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, height: 60, width: "70%", backgroundColor: '#131392' }} >
            Login
          </Button>
          <Grid container justifyContent="space-around" alignItems="center">
            <Link href="" variant="body2" sx={{ marginLeft: -18 }} onClick={() => navigate('/admin')} >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Box>
      </Box>
      <Box
        component="img"
        sx={{
          height: 250,
          width: 350,
          maxHeight: { xs: 250, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt=""
        src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg"
      />
    </Container>
  )
}

export default AdminLogin;