import React from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Img1 from '../Images/Img1.png'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '100vw',
        height: '38rem',
        backgroundImage: `url(${Img1})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
    },
    text:{
        display:'flex',
        justifyContent: 'left',
        fontFamily:'Arial',
        height: '15vh',
        padding:'20'
    },
    button:{
        margin: theme.spacing(3, 0, 2)
    }
}
))

const theme = createTheme ({
    typography: {
        h1:{
            fontSize: 40,
            marginRight: '60%'

        },
        h6:{
            marginRight: '70%'
        }
    },
    palette: {
        primary : {
            main: '#02A95C',
        }
    }
})

const HeroSection = () => {

    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <Grid className={classes.root} style={{marginTop:60}}>
            <Grid className={classes.text}>  
            </Grid>
            <Grid className={classes.text}>
            </Grid>
            <Box>
            <ThemeProvider theme={theme}>
                <Grid xs={12}>
            <Typography variant="h1" align="left" style={{paddingLeft: '5%', marginTop: -70}}><b>Fundraising for the people and</b></Typography>
            <Typography variant="h1" align="left" style={{paddingLeft: '5%'}}><b>causes you care about</b></Typography>
            <Typography variant="h6" color="inherit" align="left" style={{paddingLeft: '5%', color: "#767676", fontSize: 25}}><p>Get Started Today.</p></Typography>
            <Grid xs={12} sm={3}><Button className={classes.button} variant="contained" color="primary" size="large" style={{textTransform: 'none', marginRight:'10%', padding: '16px 30px 16px' }}>
               <Typography variant="h5" style={{fontSize:18}}> <b>Start a GoFundMe</b> </Typography>
            </Button>
            </Grid>
            </Grid>
            
            </ThemeProvider>
                </Box>

                </Grid> 
        </ThemeProvider>
    );
}
export { HeroSection };