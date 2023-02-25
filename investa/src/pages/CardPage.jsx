import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UpdateIcon from '@material-ui/icons/Update';
import Link from '@material-ui/core/Link';
import LinearProgress from '@material-ui/core/LinearProgress';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';


const useStyles = makeStyles((theme) => ({
    media: {
        backgroundImage: 'url(https://i1.wp.com/www.nptechforgood.com/wp-content/uploads/2019/11/GoFundMe-Charity-Share-Image.png?fit=1024%2C512&ssl=1)',
        height: '50vh',
        marginRight: '30px'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    button: {
        width: 'auto',
        textTransform: 'none',
        fontSize: 16,
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#02A95C',
        }
    }
})


function CardPage() {

    const classes = useStyles();


    return (

        <div>
            <ThemeProvider theme={theme}>
                <Header />
                <Container maxWidth="lg">

                    <Typography variant="h4" align="left" style={{ padding: '10% 0% 2%', color: '#333333' }}><b>Donations for Mason and Keshia Sawyer Family</b></Typography>


                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Paper className={classes.media}></Paper>
                            <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 20, fontSize: 17 }}> <AccountCircleIcon color='primary' fontSize="large" style={{ marginBottom: -10, marginRight: 10 }}></AccountCircleIcon>
                                The Sawyer Family is organizing this fundraiser.</Typography>
                            <Divider></Divider>
                            <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 20, fontSize: 17 }}> Created 2 days ago</Typography>
                            <Divider></Divider>
                            <Typography align="left" variant='body2' style={{ margin: '25px 0px 25px', fontSize: 16 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget libero feugiat, posuere orci vel, varius enim.
                                Praesent id leo sed nisl ullamcorper consequat at non turpis. Pellentesque nec nunc non lectus iaculis porta eu eu lectus.
                                Maecenas id velit lacinia, finibus dolor at, malesuada ex. Sed sit amet vestibulum nunc, et euismod tortor. Donec tortor ipsum, tempus non lectus sed, efficitur facilisis eros. Etiam ornare vehicula nisl, ut blandit erat congue at.

                                Aliquam quis lorem convallis, fermentum risus venenatis, convallis nunc. Donec id sapien sed lacus varius eleifend sed semper eros.
                                Sed ex velit, egestas laoreet lobortis ac, commodo a ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec blandit, augue sed congue aliquam, tortor odio mollis mi, sed elementum nibh neque ac enim.
                                Ut fringilla nibh vel bibendum bibendum. Cras in elementum nulla. Proin mattis lobortis nisl, euismod facilisis libero dictum et. Nullam ipsum orci, consectetur ac auctor vel, placerat sed ex. Pellentesque tristique eu tortor id accumsan. Cras ornare commodo fringilla.
                                Ut nec risus sapien. Integer tincidunt id risus sit amet efficitur.
                                Aenean ex sem, ullamcorper at posuere nec, tristique sit amet urna. Maecenas egestas suscipit ante, a pellentesque urna sollicitudin id. Pellentesque eu volutpat lacus, vitae pellentesque metus.

                                Donec dignissim dignissim dolor, non viverra ex tristique ut. Nullam vitae lorem porttitor, suscipit sem eget, facilisis turpis. Nunc semper dolor sit amet erat condimentum dignissim.
                                In nec convallis purus, sit amet fermentum magna. Cras velit massa, auctor eu sollicitudin ac, pulvinar eget turpis. Suspendisse eleifend ullamcorper felis eget porta. Donec eget dui blandit, tristique urna id, condimentum lorem.
                                Mauris eu augue lobortis, convallis ex id, sodales ante. Sed porta porta arcu, ut mollis purus luctus eget. In venenatis neque arcu, at dictum magna lobortis a. Nulla fringilla nibh commodo, condimentum nunc sed, aliquet ligula.
                            </Typography>

                            <Typography variant="h4" align="left" style={{ fontSize: 22, margin: '40px 0px 15px' }}>
                                <b>Organizer</b>
                            </Typography>

                            <Divider></Divider>

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 5, fontSize: 16, color: '#333333' }}> <AccountCircleIcon color='primary' fontSize="large" style={{ marginBottom: -13, marginRight: 10 }}></AccountCircleIcon>
                                        The Sawyer Family</Typography>
                                    <Typography align="left" variant='body2' style={{ marginLeft: 45, marginBottom: 5, fontSize: 14, color: '#333333' }}> Organizer</Typography>
                                    <Typography align="left" variant='body2' style={{ marginLeft: 45, marginBottom: 0, fontSize: 14, color: '#333333' }}>West Jordan, UT</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button className={classes.button} style={{ margin: '40px 0px 0px 70%' }} size="large" align="right" color="primary" variant="outlined"><b>Contact</b></Button>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} style={{ padding: 20 }} position="fixed" elevation={10}>
                                <Typography variant="body1" align="left" style={{ fontSize: 20, marginBottom: 20 }}><b>$130,362 raised</b> of $150,000</Typography>
                                <LinearProgress variant="determinate"></LinearProgress>
                                <Button className={classes.button} style={{ width: '100%', padding: 10, marginTop: 20, backgroundColor: '#fdb72f' }} variant="contained"><b>Share</b> </Button>
                                <Button className={classes.button} href ="/PaymentPage" variant="contained" style={{ width: '100%', padding: 10, marginTop: 20, backgroundColor: '#fdb72f' }}> <b>Donate now</b> </Button>
                                <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 20, fontSize: 17, color: '#6d2e91' }}> <TrendingUpRoundedIcon fontSize="large" style={{ marginBottom: -13, marginRight: 10 }}></TrendingUpRoundedIcon>
                                    <b>656 people just donated</b></Typography>
                                <Divider></Divider>
                                <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 5, fontSize: 17 }}> <AccountCircleIcon color='primary' fontSize="large" style={{ marginBottom: -20, marginRight: 10 }}></AccountCircleIcon>
                                    David Davis</Typography>
                                <Typography variant="body2" style={{ fontSize: 14, marginBottom: 20, marginLeft: 45 }} align="left"><b>$50 -</b> <Link>Recent donation</Link> </Typography>
                                <Divider></Divider>
                                <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 5, fontSize: 17 }}> <AccountCircleIcon fontSize="large" style={{ marginBottom: -20, marginRight: 10 }}></AccountCircleIcon>
                                    Anonymous</Typography>
                                <Typography variant="body2" style={{ fontSize: 14, marginBottom: 20, marginLeft: 45 }} align="left"><b>$50 -</b> <Link>Top donation</Link> </Typography>
                                <Divider></Divider>
                                <Typography align="left" variant='body2' style={{ paddingTop: 20, marginBottom: 5, fontSize: 17 }}> <AccountCircleIcon color='primary' fontSize="large" style={{ marginBottom: -20, marginRight: 10 }}></AccountCircleIcon>
                                    Desirae Smoot</Typography>
                                <Typography variant="body2" style={{ fontSize: 14, marginBottom: 20, marginLeft: 45 }} align="left"><b>$50 -</b> <Link>First donation</Link> </Typography>
                                <Button className={classes.button} variant="outlined" color="primary" style={{ margin: 20 }}><b>See all</b></Button>
                                <Button className={classes.button} variant="outlined" style={{ margin: 20 }}><b>See top donations</b></Button>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={0} style={{ margin: '55px -40px 55px' }}>
                        <Grid item sm={4}>

                            <Card className={classes.root} elevation={0}>

                                <CardContent>

                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, color: '#333333', padding: 20 }}><LanguageIcon fontSize='large' style={{ fontSize: 40, marginBottom: -13, marginRight: 15 }}></LanguageIcon>
                                        <b>#1 fundraising platform</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left" style={{ marginLeft: 75, fontSize: 17 }}>
                                        More people start fundraisers on GoFundMe than on any other platform. <Link href="/"> Learn more</Link></Typography>

                                </CardContent>

                            </Card>

                        </Grid>


                        <Grid item sm={4}>

                            <Card className={classes.root} elevation={0}>

                                <CardContent>

                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, color: '#333333', padding: 20 }}><CheckCircleIcon fontSize='large' style={{ fontSize: 40, marginBottom: -13, marginRight: 15 }}></CheckCircleIcon>
                                        <b>GoFundMe Guarantee</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left" style={{ marginLeft: 75, fontSize: 17 }}>
                                        In the rare case something isn’t right, we will work with you to determine if misuse occurred. <Link href="/"> Learn more</Link></Typography>
                                </CardContent>

                            </Card>

                        </Grid>


                        <Grid item sm={4}>

                            <Card className={classes.root} elevation={0}>

                                <CardContent>

                                    <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17, color: '#333333', padding: 20 }}><UpdateIcon fontSize='large' style={{ fontSize: 40, marginBottom: -13, marginRight: 15 }}></UpdateIcon>
                                        <b>Expert advice, 24/7</b>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left" style={{ marginLeft: 75, fontSize: 17 }}>
                                        Contact us with your questions and we’ll answer, day or night. <Link href="/"> Learn more</Link></Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>



                </Container>

                <Footer />
            </ThemeProvider>
        </div>

    )
}

export { CardPage };