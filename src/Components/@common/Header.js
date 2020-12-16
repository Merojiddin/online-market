import React from 'react'
import {Typography, Box, makeStyles} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/deluxe.jpg'

const Header = () => {
  const classes = useStyle()

  return (
    <Container className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Box className={classes.headerTopWrapper}>
          <Box className={classes.headerTop}>
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.headerText}>
                Dushanba - Juma : 9:00 AM - 9:00 PM
              </Typography>
            </Toolbar>
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.headerText}>
                Eski tashmi, Yangi zavod, Delux Doors
              </Typography>
              <Button className={classes.headerBtn}>"Contact Us"</Button>
            </Toolbar>
            <Toolbar className={classes.toolbar}>
              <Typography className={classes.headerText}>
                Tell: +998 (93) 607-09-09
              </Typography>
              <FacebookIcon />
              <InstagramIcon />
            </Toolbar>
          </Box>
        </Box>

        <Box className={classes.headerBottom}>
          <Toolbar className={classes.Toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img alt="Logo" src={Logo} className={classes.logo}/>
            </IconButton>
          </Toolbar>

          <Toolbar className={classes.ToolbarMid}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button className={classes.Button}>
                Home
              </Button>
            </Link>
            <Button className={classes.Button}>About Us</Button>
              <Link to="/products" style={{ textDecoration: 'none' }}>
                <Button className={classes.Button}>
                  Products
                </Button>
              </Link>
            <Button className={classes.Button}>Our Help</Button>
          </Toolbar>
          <Toolbar className={classes.Toolbar}>
            <Button className={classes.login}>Login</Button>
          </Toolbar>
        </Box>

      </AppBar>   
    </Container>
    
  )
  
}

const useStyle = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      margin: 0,
      padding: 0,
      height: 136,
    },
    appBar: {
      backgroundColor: '#FFF',
      color: '#000',
      boxShadow: 'none',
      alignItems: 'center',
      borderBottom: 'solid 1px lightskyblue',

    },
    headerTopWrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#000',
      color: '#FFFFFF'
    },
    headerTop:{
      height: 40,
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: 1280
    },
    toolbar: {
      minHeight: 20,
    },
    headerText: {
      fontSize: 12,

    },
    logo: {
      width: 70,
      height: 60
    },
    headerBtn: {
      textDecoration: 'underline',
      color: '#FFFFFF',
    },

    headerBottom: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: 1280,
    },
    Toolbar: {
      height: 80,
    },
    ToolbarMid: {
      width: "65%",
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
    },
    login: {
      border: 'solid 2px skyblue',
      borderRadius: 25,
      width: 80,

    },
    Button: {
      borderRadius: 25,
      width: 100,
    }

}))

export default Header;
