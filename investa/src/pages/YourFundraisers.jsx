import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    button: {
        width: 'auto',
        textTransform: 'none',
        fontSize: 16,
    },
    root: {
        maxWidth: 330,
    },
    media: {
        height: 200,
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#02A95C',
        }
    }
})


function YourFundraisers() {

    const classes = useStyles();

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header />

                <Container maxWidth="lg" style={{ marginTop: '8%' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>

                            <Typography variant="h5" align="left" style={{ color: '#333333' }}><b>Your fundraisers</b></Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>

                            <Button className={classes.button} variant='contained' color='primary' style={{ marginLeft: '6%' }}><AddIcon style={{ margin: 3 }} /><b>Start a new fundraiser</b></Button>

                        </Grid>
                    </Grid>
                </Container>



                <Grid container spacing={0} align="center" style={{ padding: '5%' }}>
                    <ThemeProvider theme={theme}>
                        <Grid item sm={3} style={{ marginLeft: '8%' }}>

                            <Card className={classes.root}>
                                <CardActionArea href='/FundraiserPage'>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201209111638-gofundmelogo-iyw.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="h2" align="left" color="primary" style={{ fontSize: 17 }}>
                                            <b>NEPTUNE BEACH, FL</b>
                                        </Typography>
                                        <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}>
                                            <b>Timmy Obi Family Fund</b>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align="left">
                                            Timmy Obi was a loving husband to Lizzy and father to Davis, Kyle and Brooks.
                                        </Typography>

                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color: '#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>


                        <Grid item sm={3}>

                            <Card className={classes.root}>
                                <CardActionArea href='/FundraiserPage'>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F201209111638-gofundmelogo-iyw.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h3" component="h2" align="left" color="primary" style={{ fontSize: 17 }}>
                                            <b>NEPTUNE BEACH, FL</b>
                                        </Typography>
                                        <Typography gutterBottom variant="h3" component="h2" align="left" style={{ fontSize: 17 }}>
                                            <b>Timmy Obi Family Fund</b>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align="left">
                                            Timmy Obi was a loving husband to Lizzy and father to Davis, Kyle and Brooks.
                                        </Typography>
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color: '#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                    </ThemeProvider>
                </Grid>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export { YourFundraisers };