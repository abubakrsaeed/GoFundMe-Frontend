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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    table: {
        minWidth: 700,
        
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


function createData(id, firstname, lastname, email, donation) {
    return { id, firstname, lastname, email, donation};
  }
  
  const rows = [
    createData(1, 'Ahmed', 'Ali', '123@gmail.com', '$50'),
    createData(2, 'Ahmed', 'Ali', '123@gmail.com', '$30'),
    createData(3, 'Ahmed', 'Ali', '123@gmail.com', '$20'),
    createData(4, 'Ahmed', 'Ali', '123@gmail.com', '$10'),
    createData(5, 'Ahmed', 'Ali', '123@gmail.com', '$70'),
  ];

const theme = createTheme({
    palette: {
        primary: {
            main: '#02A95C',
        }
    }
})


function FundraiserPage() {

    const classes = useStyles();


    return (

        <div>
            <ThemeProvider theme={theme}>
                <Header />
                <Container maxWidth="lg">

                    <Typography variant="h4" align="left" style={{ padding: '10% 0% 2%', color: '#333333' }}><b>Donations for Mason and Keshia Sawyer Family</b></Typography>


                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={8} style={{marginBottom: 70 }}>

                        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell align="left"><b>First Name</b></TableCell>
            <TableCell align="left"><b>Last Name</b></TableCell>
            <TableCell align="left"><b>Email</b></TableCell>
            <TableCell align="left"><b>Donation</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.firstname}</TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.donation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                        
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} style={{ padding: 20 }} position="fixed" elevation={10}>
                                <Typography variant="body1" align="left" style={{ fontSize: 20, marginBottom: 20 }}><b>$130,362 raised</b> of $150,000</Typography>
                                <LinearProgress variant="determinate"></LinearProgress>
                                <Button className={classes.button} style={{ width: '100%', padding: 10, marginTop: '14%', backgroundColor: '#fdb72f' }} variant="contained"><b>Share</b> </Button>
                                <Button className={classes.button} variant="contained" style={{ width: '100%', padding: 10, marginTop: 30, marginBottom: '12%', backgroundColor: '#fdb72f' }}> <b>Close fundraiser</b> </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                <Footer />
            </ThemeProvider>
        </div>

    )
}

export { FundraiserPage };