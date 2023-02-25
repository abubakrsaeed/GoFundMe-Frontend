import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles({
    root: {
        maxWidth: 330,
    },
    media: {
        height: 200,
    },
    button: {
        width: 'auto',
        textTransform:'none',
        fontSize: 18,
        color: '#666666',
        backgroundColor: '#fbf8f6',

      },
});

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

function Discover() {
    const classes = useStyles();

    return (
        <div>
            <Header/>
             <Container maxWidth="lg">
             <Button href='/' className={classes.button} style={{ margin: '150px 0px 16px', marginRight: '82%'}}> <ChevronLeftIcon fontSize="medium" style={{color:'#666666' }}></ChevronLeftIcon> Home </Button>
             <Typography variant="h4" align="left" style={{ margin: '0px 0px 16px', padding: '0px 65px 0px', color: '#333333', fontSize:40 }}><b>Browse fundraisers</b></Typography>
             <Typography variant="body2" align="left" style={{ padding: '0px 65px 60px', color: '#333333', fontSize:24 }}>People around the world are raising money for what they are passionate about.</Typography>
             </Container>
        <div style={{backgroundColor: '#fbf8f6'}}>
            <Container maxWidth="lg" style={{padding: 50}}>
                <Grid container spacing={0} align="center" style={{padding:10}}>
                <ThemeProvider theme={theme}>
                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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

                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>

                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>
                    </Grid>
                    </ThemeProvider>
                </Grid>

                <Grid container spacing={0} align="center" style={{padding:10}}>
                <ThemeProvider theme={theme}>
                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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

                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>

                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>
                    </Grid>
                    </ThemeProvider>
                </Grid>




                <Grid container spacing={0} align="center" style={{padding:10, paddingBottom: '8%'}}>
                <ThemeProvider theme={theme}>
                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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

                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>
                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>

                    </Grid>


                    <Grid item sm={4}>

                        <Card className={classes.root}>
                                <CardActionArea>
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
                                        <Typography variant="body1" align="left" style={{ marginTop: '10%', paddingBottom: 5, color:'#666666' }}>Last donation 1h ago</Typography>

                                        <LinearProgress variant="determinate"></LinearProgress>

                                        <Typography variant="body2" align="left"><b>$130,362 raised</b> of $150,000</Typography>
                                    </CardContent>
                                </CardActionArea>
                        </Card>
                    </Grid>
                    </ThemeProvider>
                </Grid>
            </Container>
        </div>
        <Footer/>
        </div>
    );
}

export { Discover };