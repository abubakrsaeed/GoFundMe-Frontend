import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 50,
    },
    formControl: {
        margin: theme.spacing(1),
        width: '90%',
    },
    logo: {
        maxWidth: '45%',
    },
}));

const theme = createTheme({
    typography: {
        body2: {
            fontSize: 18,
            marginTop: 10

        },
    },
    palette: {
        primary: {
            main: '#02A95C',
        }
    }
})



function Footer() {
    const [language, setLanguage] = React.useState('1');

    const handleLanguage = (event) => {
        setLanguage(event.target.value)
    }


    const classes = useStyles();
    return (
        <div>
            <Divider style={{ marginBottom: '-6%' }} />
            <Grid container spacing={3} style={{ marginTop: '8%' }}>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper} align="left" elevation='none'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GoFundMe_logo.svg/1280px-GoFundMe_logo.svg.png" className={classes.logo} alt="GoFundMe"
                            onClick={event => window.location.href = '/'}
                            style={{ padding: '20px' }} />
                        <FormControl align='center' variant="outlined" className={classes.formControl}>
                            <Select value={language} displayEmpty onChange={handleLanguage}>
                                <MenuItem value={1} >English (United States)</MenuItem>
                                <MenuItem value={2} >Turkish</MenuItem>
                                <MenuItem value={3} >Urdu</MenuItem>
                                <MenuItem value={4} >German</MenuItem>
                                <MenuItem value={5} >Danish</MenuItem>
                                <MenuItem value={6} >Chinese</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper} align="left" elevation='none'>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5" color="primary" style={{ fontSize: 17, marginBottom: 30 }}><b>FUNDRAISE FOR</b></Typography>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Medical</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Emergency</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Memorial</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Education</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Nonprofit</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Coronavirus fundraising</Typography></Link>

                        </ThemeProvider>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper} align="left" elevation='none'>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5" color="primary" style={{ fontSize: 17, marginBottom: 30 }}><b>LEARN MORE</b></Typography>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">How GoFundMe works</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Common questions</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Success stories</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Supported countries</Typography></Link>
                        </ThemeProvider>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper} align="left" elevation='none'>
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5" color="primary" style={{ fontSize: 17, marginBottom: 30 }}><b>RESOURCES</b></Typography>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Help center</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Blog</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">GoFundMe Stories</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Press center</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">Careers</Typography></Link>
                            <Link href='/about' style={{ color: '#333333' }}><Typography variant="body2">About</Typography></Link>
                            <Link href='/' style={{ color: '#333333' }}><Typography variant="body2">More resources</Typography></Link>

                        </ThemeProvider>
                    </Paper>
                </Grid>
                </Grid>
                <Divider/>
                <Grid container spacing={3} style={{marginTop: '20px'}}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation='none'>
                        <Typography variant="h5" align="left" style={{ fontSize: 17, marginLeft: '25%', marginBottom: 10, color: "#666666" }}>
                            © 2010-2021 GoFundMe
                            <Link style={{ marginLeft: 15, color: "#666666" }} href="/"> Terms</Link>
                            <Link style={{ margin: 10, color: "#666666" }} href="/"> Privacy</Link>
                            <Link href="/" style={{ color: "#666666"}}> Legal</Link>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation='none'>
                        <FacebookIcon style={{ color: '#3b5998', marginBottom: 10, marginRight: 10 }}></FacebookIcon>
                        <YouTubeIcon style={{ color: 'red', marginBottom: 10, marginLeft: 10, marginRight: 10 }}></YouTubeIcon>
                        <TwitterIcon style={{ color: 'dodgerblue', marginBottom: 10, marginLeft: 10, marginRight: 10 }}></TwitterIcon>
                        <InstagramIcon style={{ marginBottom: 10, marginLeft: 10 }}></InstagramIcon>

                    </Paper>
                </Grid>







            </Grid>
        </div>
    )
}

export { Footer };