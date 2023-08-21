"use client"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_API } from "@/utils/baseUrl/methods/post";
// import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";
import {
    setLoginEmail,
    setLoginPassword,
} from "../../app/redux-toolkit/loginReducer"
import { isUser, addUserInfo } from "../../app/redux-toolkit/registerReducer"
import { useState } from "react";
export default function Login() {
    const [errors, setErrors] = useState({});
    const data = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const router = useRouter();
    const handleLoginSubmit = async (e) => {
        if (validateForm()) {
            e.preventDefault()
            try {
                const response = await LOGIN_API(data)
                localStorage.setItem('userAccessToken', response?.data?.accessToken)
                dispatch(isUser(response?.data?.accessToken))
                dispatch(addUserInfo(response?.data?.userInfo))
                router.push('/');
            } catch (error) {
                console.log(error, "error in the login page");
            }
        }
    }
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

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

        setErrors(newErrors);
        return isValid;
    };

    return (
        <Container component="main" maxWidth="md"   >
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
                        width: 350, marginLeft: 80,
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
                    Member login
                </Typography>

                <Divider >Or Continue with</Divider>
                <Box component="form" sx={{ paddingLeft: 20 }} onSubmit={handleLoginSubmit} >
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
                        error={!!errors.email}
                        helperText={errors.email}
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
                        error={!!errors.password}
                        helperText={errors.password}
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 5, mb: 2, height: 60, width: "70%", backgroundColor: '#131392' }}  >
                        Login
                    </Button>
                    <Grid container justifyContent="space-around"
                        alignItems="center">

                        <Link href="" variant="body2" sx={{ marginLeft: -18 }} onClick={()=>router.push('/signup')} >
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
    );
}