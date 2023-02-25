import React from 'react';
import { Header } from '../components/Header'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { DropzoneArea } from 'material-ui-dropzone';
import Divider from '@material-ui/core/Divider';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 30,
        height: '100%',
        width: '40%',
        margin: "30px auto"
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
        padding: 15,
    },
    formControl: {
        margin: theme.spacing(1),
        width: '60%',
    },
    typography: {
        marginTop: 40,
    },
    dropZone: {
        fontWeight: 20
    },
    paper: {
        height: '50vh',
        width: '52%',
        marginBottom: '5%'
    }
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#02A95C',
        }
    }
})

function Fundraise() {

    const classes = useStyles();
    const [country, setCountry] = React.useState('');
    const [category, setCategory] = React.useState('');

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }
    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    return (
        <div>
            <Header />
            <Typography align='center' variant="h4" style={{ marginTop: 120, color: 'steelblue' }}>
                <b>Raising Funds for a Startup</b>
            </Typography>

            <Paper className={classes.paperStyle} elevation={'none'}>
                <Typography
                    variant="body2"
                    align='center'
                    style={{ fontSize: 20 }}>
                    <b>Let's start with the basics</b>
                </Typography>

                <Typography className={classes.typography} style={{ marginRight: '39%' }}>Where do you live?</Typography>

                <FormControl align='center' variant="outlined" className={classes.formControl}>
                    <Select value={country} displayEmpty onChange={handleCountry}>
                        <MenuItem value="" disabled >Select a country</MenuItem>
                        <MenuItem value={1} >Australia</MenuItem>
                        <MenuItem value={2} >Pakistan</MenuItem>
                        <MenuItem value={3} >England</MenuItem>
                        <MenuItem value={4} >Turkey</MenuItem>
                        <MenuItem value={5} >Denmark</MenuItem>
                        <MenuItem value={6} >Germany</MenuItem>
                    </Select>
                </FormControl>

                <Typography style={{ marginRight: '26%' }} className={classes.typography}>Where are you fundraising for?</Typography>

                <FormControl align='center' variant="outlined" className={classes.formControl}>
                    <Select value={category} displayEmpty onChange={handleCategory}>
                        <MenuItem value="" disabled >Choose a category</MenuItem>
                        <MenuItem value={1} >Accidents & Emergencies</MenuItem>
                        <MenuItem value={2} >Animals & pets</MenuItem>
                        <MenuItem value={3} >Babies, Kids & Family</MenuItem>
                        <MenuItem value={4} >Celebrations & Events</MenuItem>
                        <MenuItem value={5} >Community & Neighbors</MenuItem>
                        <MenuItem value={6} >Others</MenuItem>
                    </Select>
                </FormControl>

                <Typography style={{ marginRight: '29%' }} className={classes.typography}>What is your fundraiser title?</Typography>

                <FormControl align='center' variant="outlined" className={classes.formControl}>
                    <TextField id="outlined-basic" multiline required inputProps={{ maxLength: 50 }} placeholder="Ex: Help Sarah Rebuild Her Home" variant="outlined" />
                    <FormHelperText style={{ fontSize: 12, marginLeft: 3 }}>Try to include a person's name and the purpose.</FormHelperText>
                </FormControl>


                <Typography variant="body2" align='center' style={{ marginTop: 40, fontSize: 20, marginBottom: 10 }}><b>Set your fundraising goal</b></Typography>

                <Typography style={{ marginRight: '22%', marginBottom: 5 }} className={classes.typography}>How much would you like to raise?</Typography>
                <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel>Amount</InputLabel>
                    <OutlinedInput
                        type="number"
                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                        endAdornment={<InputAdornment position="end">PKR</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <Typography variant="body2" align='center' style={{ marginTop: 40, fontSize: 20 }}><b>Set your share price</b></Typography>

                <Typography style={{ marginRight: '22%', marginBottom: 5 }} className={classes.typography}>How much would you like to raise?</Typography>
                <FormControl className={classes.formControl} variant="outlined">
                    <InputLabel>Amount</InputLabel>
                    <OutlinedInput
                        type="number"
                        startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                        endAdornment={<InputAdornment position="end">PKR</InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <Typography variant="body2" align='center' style={{ marginTop: 40, fontSize: 20 }}><b>Add a cover photo or video</b></Typography>
                <Grid xs={7} style={{ marginLeft: '22%' }}>
                    <Typography align='left' variant="body2" style={{ marginTop: 20, marginBottom: 20 }}>
                        A high-quality photo or video will help your story and build trust with others
                    </Typography>
                    <DropzoneArea
                        className={classes.dropZone}
                        acceptedFiles={['image/*', 'video/*']}
                        showFileNames
                        dropzoneText="Upload a photo"
                        showAlerts={false}
                    />
                </Grid>
            </Paper>
            <Typography variant="h5" style={{ padding: 10, marginRight: '42.5%' }}><b>Tell your story</b></Typography>
            <Typography variant="body2" style={{ paddingBottom: 15, fontSize: 17, marginRight: '40%' }}> What are you fundraising?</Typography>

            <ThemeProvider theme={theme}>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} align="right">
                        <Paper className={classes.paper} align="center" elevation='none'>

                            <TextField style={{ width: '100%' }} multiline rows={10} required placeholder="Ex: Help Sarah Rebuild Her Home" variant="outlined" />
                            <Button className={classes.button} variant="outlined" color="primary" size="large" style={{ textTransform: 'none', margin: 30, width: '100%', marginLeft: 0 }}>
                                <Typography variant="h5" style={{ fontSize: 18 }}> <b>Preview Fundraiser</b> </Typography>
                            </Button>
                            <Button className={classes.button} variant="contained" color="primary" size="large" style={{ textTransform: 'none', margin: 30, width: '100%', marginLeft: 0 }}>
                                <Typography variant="h5" style={{ fontSize: 18 }}> <b>Next</b> </Typography>
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Paper className={classes.paper} elevation='10'>
                            <Typography variant='body2' style={{ paddingTop: 20, marginBottom: 20, fontSize: 17 }}> <AccountCircleIcon fontSize="large" style={{ marginBottom: -10, marginRight: 10 }}></AccountCircleIcon> Tips from Jocelyn our fundraising expert</Typography>
                            <Divider />

                            <Typography variant="h5" align='left' style={{ margin: 20, fontSize: 18 }}><b>To raise the most money for a campaign, make sure you:</b></Typography>
                            <Typography variant="h5" align='left' style={{ margin: 20, fontSize: 18 }}> <CheckCircleOutlineIcon color="primary" style={{ marginBottom: -5 }}></CheckCircleOutlineIcon> Describe who will benefit</Typography>
                            <Typography variant="h5" align='left' style={{ margin: 20, fontSize: 18 }}> <CheckCircleOutlineIcon color="primary" style={{ marginBottom: -5 }}></CheckCircleOutlineIcon> Describe what the funds will be used for</Typography>
                            <Typography variant="h5" align='left' style={{ margin: 20, fontSize: 18 }}> <CheckCircleOutlineIcon color="primary" style={{ marginBottom: -5 }}></CheckCircleOutlineIcon> Explain how soon you need the funds</Typography>
                            <Typography variant="h5" align='left' style={{ margin: 20, fontSize: 18 }}> <CheckCircleOutlineIcon color="primary" style={{ marginBottom: -5 }}></CheckCircleOutlineIcon> Talk about what the support will mean to you</Typography>
                            <Typography variant="h5" align='left' style={{ margin: 20, fontSize: 18 }}> <CheckCircleOutlineIcon color="primary" style={{ marginBottom: -5 }}></CheckCircleOutlineIcon> Share how grateful you will be for help</Typography>
                        </Paper>

                    </Grid>
                </Grid>
            </ThemeProvider>

        </div>
    )
}

export { Fundraise };