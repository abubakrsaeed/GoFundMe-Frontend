import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
      },
      paperStyle: {
        padding: 30,
        height: '80vh',
        width: '40%',
        margin:"30px auto"

      },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    maxWidth: '13%',
},
  form: {
    width: '350px',
    marginTop: theme.spacing(1),
    align: 'center',
  },
  facebook: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#3B579D',
    textTransform:'none',
    fontSize: 17
  },
  signin: {
    margin: theme.spacing(3, 0, 2),
    textTransform:'none',
    fontSize: 17
  },
  title: {
    flexGrow: 1,
  },

  container: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 50,
    fontSize: 20,
  }
}));

const theme2 = createTheme ({
    typography: {
        h3:{
            fontSize: 42,
            marginTop: -40
        },
    },
    palette: {
        primary : {
            main: '#02A95C',
        }
    }
  })


  const DividerWithText = ({ children }) => {
    const classes = useStyles();
    return (
     <div className={classes.container}>
       <div className={classes.border} />
       <span className={classes.content}>{children}</span>
       <div className={classes.border} />
     </div>
    );
   };



  function Signin() {
  const classes = useStyles();

  return (
      <div>



<AppBar position="fixed" color="white" elevation={0} >
        <Toolbar style={{marginLeft: '12%', marginRight: '12%'}}>
     
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GoFundMe_logo.svg/1280px-GoFundMe_logo.svg.png" className={classes.logo} alt="GoFundMe"
          onClick={event =>  window.location.href='/'}
          style={{padding:'20px'}}/>

<Typography variant="body2" className={classes.title} style={{color:'#666666'}} align="right">
          Don't have an account? <Link href="/signup">Sign up</Link>
          </Typography>
        </Toolbar>
      </AppBar>




              <Grid style={{ backgroundColor: '#fbf8f6', padding: '7%'}}>
    <Paper elevation={10} className={classes.paperStyle}>
      <div className={classes.paper}>
      <ThemeProvider theme={theme2}>
        <Typography component="h1" variant="h3">
          <b>Sign in</b>
        </Typography>
        </ThemeProvider>
        </div>
        <Divider style={{margin: '30px 0px 0px'}} />
        <div className={classes.paper}>
        <Button variant="contained" color="primary" type="submit" fullWidth className={classes.facebook} size="large" 
        style={{maxWidth: '52%', maxHeight: '80px', margin: '-20px 0px 40px', padding:'16px'}}><FacebookIcon style={{padding: '0.9px'}}></FacebookIcon>
            <b>Continue with Facebook</b>
            </Button>
        <Grid>
        <DividerWithText><b>or</b></DividerWithText>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
            
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </form>
        </Grid>
        <ThemeProvider theme={theme2}>
          <Button variant="outlined" color="primary" type="submit" fullWidth className={classes.signin} size="large"
           style={{maxWidth: '52%', maxHeight: '80px', margin: '40px 0px 40px', padding:'16px'}}><b>Sign in to GoFundMe</b>
           </Button>
           </ThemeProvider>
      </div>
      <Divider style={{margin: '0px 0px 20px'}} />
      <ThemeProvider theme={theme2}>
      <Box>
      <Link href="#" variant="body1">
                {"Forgot your password?"}
              </Link>
      </Box>
      </ThemeProvider>
      </Paper>
      </Grid>
    </div>
  );
}

export {Signin};