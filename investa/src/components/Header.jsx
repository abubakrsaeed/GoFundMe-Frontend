import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    margin: 'auto',
    textAlign: 'center',
    maxWidth: '9%',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: 'auto',
    width: 'auto',
    textTransform: 'none',
    fontSize: 16,
    color: '#333333'
  },
  menuButton: {
    textTransform: 'none',
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '7ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="white" elevation={0} >
        <Toolbar style={{ marginLeft: '7%', marginRight: '7%' }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <Button className={classes.button} href="/discover"> Discover </Button>
          <Button className={classes.button} color="inherit">Fundraise for</Button>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/GoFundMe_logo.svg/1280px-GoFundMe_logo.svg.png" className={classes.logo} alt="GoFundMe"
            onClick={event => window.location.href = '/'}
            style={{ padding: '20px' }} />
          <Button className={classes.button} color="inherit">How it works</Button>






          {state === false ? (
            <Button className={classes.button} color='inherit' href='/signin'> Signin </Button>) : (
            <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}> <AccountCircleIcon style={{ padding: 10}}></AccountCircleIcon> Account </Button>
          )}

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link href='/YourFundraisers' style={{ color: '#333333' }}>
            <MenuItem>Your fundraisers</MenuItem>
</Link>
            
<Link href='/' style={{ color: '#333333' }}>
            <MenuItem>Logout</MenuItem>
</Link>

          </Menu>






          {/* <Button className={classes.button} color="inherit" href="/signin">Sign in</Button> */}
          <Button className={classes.button} style={{ color: '#02A95C' }} variant="outlined" color="primary" href="/fundraise"> Start a GoFundMe</Button>
          <IconButton>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export { Header }
