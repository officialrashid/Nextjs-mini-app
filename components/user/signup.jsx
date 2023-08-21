"use client"

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_API } from "@/utils/baseUrl/methods/post.jsx";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import Redux actions
import {
  setName,
  setEmail,
  setPhone,
  setPassword,
  isUser,
  addUserInfo
} from "../../app/redux-toolkit/registerReducer";

export default function Signup() {
  const [errors, setErrors] = useState({});
  const data = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await SIGNUP_API(data);
        localStorage.setItem('userAccessToken', response?.data?.accessToken)
        dispatch(isUser(response?.data?.accessToken))
        dispatch(addUserInfo(response.data.userInfo))
        toast.success('Registration successful!');
        router.push('/');
        // Handle success, redirection, etc.
        // For example, you can redirect the user to a different page:
        // router.push('/success');

      } catch (error) {
        console.log(error, "Error in signup response");
        // Handle error, show error message to the user, etc.
      }
    }
  }
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 4) {
      newErrors.password = "Password should be at least 6 characters long";
      isValid = false;
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone is invalid";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  return (
    <div>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: 10,
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
          <Typography
            variant="h1"
            component="h5"
            sx={{
              fontSize: 16,
              fontWeight: 500,
              color: "blue",
              alignItems: "center",
              textAlign: "center",
              marginRight: 10,
            }}
          >
            Register
          </Typography>

          <Typography
            component="h1" variant="h5" sx={{ fontSize: 24, fontWeight: 1000, marginRight: 10 }}
          >
            Start for free Today
          </Typography>
          <Divider sx={{ marginRight: 10 }}>Or Continue with</Divider>

          <Box
            component="form"
            noValidate
            sx={{ paddingLeft: 20 }}
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setName(e.target.value))}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setEmail(e.target.value))}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="phone"
              name="phone"
              autoComplete="phone"
              autoFocus
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setPhone(e.target.value))}
              error={!!errors.phone}
              helperText={errors.phone}

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
              sx={{ width: "60%" }}
              onChange={(e) => dispatch(setPassword(e.target.value))}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 5,
                  mb: 2,
                  height: 60,
                  width: "60%",
                  backgroundColor: "#131392",
                }}
              >
                Submit&Register
              </Button>
            </Stack>
            <Grid
              container
              justifyContent="space-around"
              sx={{ marginLeft: -18 }}
            >
              <Link variant="body2" onClick={() => router.push('/login')}>
                {"Don't have an account? Sign In"}
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
    </div>
  );
}