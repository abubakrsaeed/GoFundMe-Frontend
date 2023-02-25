import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/Button'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '15%',
        maxHeight: '70%',
    },
    button: {
        margin: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: '6px 12px',
        textTransform: 'none'
    },
    paper: {
        padding: 70,
        width: '30%',
        backgroundColor: '#bdd7ef'
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        }
    },
    paperStyle: {
        padding: 30,
        height: '100%',
        width: '40%',
        margin: "30px auto",
        marginTop: '5%',
    },
    heading: {
        color: 'steelblue',
        paddingBottom: 10
    },
    card: {
        backgroundColor: '#bdd7ef'
    }
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#02A95C',
        },
        secondary: {
            main: '#bdd7ef'
        }
    }
})

function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="fixed" color="white">
                <ThemeProvider theme={theme}>
                    <Toolbar>
                        <Toolbar>
                            <Button startIcon={<SearchIcon />} style={{ textTransform: 'none' }}>
                                Search
                            </Button>
                        </Toolbar>
                        <Box className={classes.sectionDesktop} >
                            <Button className={classes.button} color="inherit">Discover</Button>
                            <Button className={classes.button} color="inherit">Fundraise</Button>
                        </Box>
                        <Toolbar>
                            <img src="https://www.investa.com.au/WWW_Investa/Assets/images/investa-logo.png" className={classes.logo} alt="GoFundMe"
                                onClick={event => window.location.href = '/'}
                                style={{ padding: '20px' }} />
                        </Toolbar>
                        <Box className={classes.sectionDesktop} >
                            <Button style={{ maxWidth: '50px' }} className={classes.button} color="inherit">Signup</Button>
                            <Button className={classes.button} color="inherit" href="/signin">Signin</Button>
                            <Button className={classes.button} variant="contained" color="primary" href="/fundraise">GoFundMe</Button>
                        </Box>
                        <IconButton>
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </ThemeProvider>
            </AppBar>

            <Paper className={classes.paperStyle} elevation={'none'}>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.heading} variant="h2" align="left" style={{ fontSize: 45 }}>Company</Typography>
                    <Typography className={classes.heading} variant="h3" align="left" style={{ fontSize: 30, paddingTop: 30 }}>About Us</Typography>
                    <Typography align="left">Investa is a web application solely based upon advanced web technologies.</Typography>
                    <Typography className={classes.heading} align="left" variant="h3" style={{ fontSize: 30, paddingTop: 40, marginBottom: -35 }}>Our Team</Typography>
                </ThemeProvider>
            </Paper>

            <Container maxWidth="auto" style={{ backgroundColor: '#bdd7ef' }}>
                <Grid container spacing={0} align="center" style={{ padding: 20, backgroundColor: '#bdd7ef' }}>
                    <Grid item sm={6}>
                        <Card className={classes.card} elevation={0}>
                            <CardActionArea>
                                <CardContent>
                                    <PersonIcon color='primary' style={{ fontSize: 50, marginBottom: -13, marginRight: 15 }}> </PersonIcon>
                                    <Typography gutterBottom variant="h3" component="h2" align="center" style={{ fontSize: 17, color: '#333333', padding: 20 }}>
                                        <b>Allen Jebsen</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: 17 }}>
                                        StartEngine Co-Founder Strategic Advisor</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item sm={6}>

                        <Card className={classes.card} elevation={0}>
                            <CardActionArea>
                                <CardContent>
                                    <PersonIcon color='primary' style={{ fontSize: 50, marginBottom: -13, marginRight: 15 }}> </PersonIcon>

                                    <Typography gutterBottom variant="h3" component="h2" align="center" style={{ fontSize: 17, color: '#333333', padding: 20 }}>
                                        <b>Allen Jebsen</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: 17 }}>
                                        StartEngine Co-Founder Strategic Advisor</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container spacing={0} align="center" style={{ padding: 20, paddingBottom: '8%' }}>
                    <Grid item sm={6}>

                        <Card className={classes.card} elevation={0}>
                            <CardActionArea>
                                <CardContent>
                                    <PersonIcon color='primary' style={{ fontSize: 50, marginBottom: -13, marginRight: 15 }}> </PersonIcon>
                                    <Typography gutterBottom variant="h3" component="h2" align="center" style={{ fontSize: 17, color: '#333333', padding: 20 }}>
                                        <b>Allen Jebsen</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: 17 }}>
                                        StartEngine Co-Founder Strategic Advisor</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={6}>

                        <Card className={classes.card} elevation={0}>
                            <CardActionArea>
                                <CardContent>
                                    <PersonIcon color='primary' style={{ fontSize: 50, marginBottom: -13, marginRight: 15 }}> </PersonIcon>

                                    <Typography gutterBottom variant="h3" component="h2" align="center" style={{ fontSize: 17, color: '#333333', padding: 20 }}>
                                        <b>Allen Jebsen</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="center" style={{ fontSize: 17 }}>
                                        StartEngine Co-Founder Strategic Advisor</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>

                </Grid>

            </Container>

            <Paper className={classes.paperStyle} elevation={'none'}>

                <ThemeProvider theme={theme}>
                    <Typography className={classes.heading} variant="h2" align="left" style={{ fontSize: 40, marginTop: '-10%' }}>HOW IT WORKS</Typography>
                    <Typography className={classes.heading} variant="h3" align="left" style={{ fontSize: 30, paddingTop: 30 }}>Investment</Typography>
                    <Typography align="left">Investor can start investing in the startup using by simply making an account on investa and following the guide.</Typography>
                    <Typography className={classes.heading} align="left" variant="h3" style={{ fontSize: 30, paddingTop: 30 }}>Raising Funds</Typography>
                    <Typography align="left">Entrepreneur can raise funding for their project by submitting the request to Investa team</Typography>
                </ThemeProvider>

            </Paper>

            <Grid container align="center" style={{ marginTop: '20%', backgroundColor: '#bdd7ef' }}>
                <Grid item sm={4}>
                    <Paper className={classes.paper} align="center" elevation='none'>

                        <Typography align="left" variant="h5" style={{ fontSize: 17, marginBottom: 30 }}><b>COMPANY</b></Typography>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography variant="body2">About Us</Typography></Link>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography style={{ marginTop: 15, marginBottom: 15 }} variant="body2">The Team</Typography></Link>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography variant="body2">FAQs</Typography></Link>

                    </Paper>
                </Grid>
                <Grid item sm={4}>
                    <Paper className={classes.paper} align="center" elevation='none'>

                        <Typography align="left" variant="h5" style={{ fontSize: 17, marginBottom: 30 }}><b>HOW IT WORKS </b></Typography>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography style={{ marginBottom: 15 }} variant="body2">Investing in a business</Typography></Link>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography variant="body2">Raising Funds</Typography></Link>

                    </Paper>
                </Grid>
                <Grid item sm={4}>
                    <Paper className={classes.paper} align="center" elevation='none'>

                        <Typography align="left" variant="h5" style={{ fontSize: 17, marginBottom: 30 }}><b>JOIN</b></Typography>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography style={{ marginBottom: 15 }} variant="body2">Investor</Typography></Link>
                        <Link href='/' align="left" style={{ color: 'black' }}><Typography variant="body2">Entrepreneur</Typography></Link>


                    </Paper>
                </Grid>
            </Grid>
        </div>

    );
}
export { About };