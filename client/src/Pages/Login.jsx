import  React,{useState,useEffect} from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useNavigate}from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography,Grid,Box,Paper,TextField,CssBaseline,Link,Button,Avatar,FormControlLabel,Checkbox } from '@mui/material';
import  secureLocalStorage  from  "react-secure-storage";
import {useParams} from "react-router-dom"
import {API} from '../api/api'
const theme = createTheme();


  export default function Login({ isUserAuthenticated }) {
    
  const navigate=useNavigate()


  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [erros,showError]=useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response= await API.userLogin({email,password})
   
     
      if (response.isSuccess) {
        
         
          secureLocalStorage.setItem("9z$C&F)J", `Bearer ${response.data.token}`);
          secureLocalStorage.setItem("cRfUjXn2", JSON.stringify(response.data));
          
        isUserAuthenticated(true)
       
        navigate('/');
    } else {
        showError('Something went wrong! please try again later');
    }
 
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://img.freepik.com/premium-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?w=1380)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
              
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e)=>setEmail(e.target.value)} value={email}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)} value={password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/singup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
            </>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}