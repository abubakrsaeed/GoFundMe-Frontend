import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  paperStyle: {
    padding: 30,
    height: '80vh',
    width: '40%',
    margin:"30px auto"

  },
  logo: {
    maxWidth: '15%',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  signin: {
    margin: theme.spacing(3, 0, 2),
    textTransform: 'none',
    fontSize: 17
  },
  title: {
    flexGrow: 1,
  },
}));

const theme2 = createTheme({
  typography: {
    h3: {
      fontSize: 42,
      marginTop: -40,
    },
  },
  palette: {
    primary: {
      main: '#02A95C',
    }
  }
})

function Signup() {
  const classes = useStyles();

  return (
    <div>
      

      <ThemeProvider theme={theme2}>
      <AppBar position="fixed" color="white" elevation={0} >
        <Toolbar style={{marginLeft: '12%', marginRight: '12%'}}>
     
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GoFundMe_logo.svg/1280px-GoFundMe_logo.svg.png" className={classes.logo} alt="GoFundMe"
          onClick={event =>  window.location.href='/'}
          style={{padding:'20px'}}/>

<Typography variant="body2" className={classes.title} style={{color:'#666666'}} align="right">
          Don't have an account? <Link color="primary" href="/signin">Sign in</Link>
          </Typography>
        </Toolbar>
      </AppBar>

      </ThemeProvider>


      <Grid style={{ backgroundColor: '#fbf8f6', padding: '5%'}}>
    <Paper elevation={10} className={classes.paperStyle}>
        <CssBaseline />
        <ThemeProvider>
        <div className={classes.paper}>
        <Box>
          <Typography component="h1" variant="h3" style={{marginBottom: 30, marginTop:-45, fontSize:42}}>
            <b>Sign up</b>
          </Typography>
          </Box>
          </div>
          </ThemeProvider>
          <Divider style={{marginBottom: 40}} />
          <div>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={10} sm={5}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  style={{width: '90%',marginLeft:63}}
                />
              </Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  style={{width:'90%', marginLeft:70}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  style={{width:500}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  style={{width:500}}
                />
              </Grid>
            </Grid>
            <ThemeProvider theme={theme2}>
            <Button variant="contained" color="primary" type="submit" fullWidth className={classes.signin} size="large"
           style={{maxWidth: '20%', maxHeight: '80px', margin: '40px', padding:'16px'}}><b>Sign up</b>
           </Button>
            </ThemeProvider>
            <Divider style={{marginBottom: 25}}/>
            <Typography variant="body2" style={{fontSize:13}}>
            GoFundMe's fee is 5% from each donation you receive.
            The payment processor fee is 2.9% + $0.30 per donation.
            By continuing, you agree to the GoFundMe <Link>terms</Link> and acknowledge
            receipt of our privacy <Link>policy</Link>.
            </Typography>
          </form>
        </div>
        </Paper>
      </Grid>
    </div>
  );
}

export { Signup };