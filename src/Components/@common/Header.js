import React from 'react'
import {Typography, Box, makeStyles} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Logo from '../../Assets/images/logo.svg'

const Header = () => {
  const classes = useStyle()

  return (
    <Container className={classes.container}>
      <Box className={classes.firstBox}>
          <Box className={classes.box1box}>
            <Typography className={classes.text}>
              Monday-Friday: 9: 00 AM - 5.30 PM
            </Typography>
            <Typography className={classes.text}>
              Visit our showroom in 1234 Street Adress City Address, 1234 "Contact Us"
            </Typography>
            <Box className={classes.box1boxItem}>
              <Typography className={classes.text}> 
                Call Us: (00) 1234 5678 
              </Typography>
                <FacebookIcon className={classes.icon}/>
                <InstagramIcon className={classes.icon}/>
            </Box>
          </Box>
      </Box> 
      <Box className={classes.box2}>
        <AppBar position="" className={classes.appBar}>
          <Toolbar className={classes.Toolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img alt="Logo" src={Logo}/>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Laptops
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Desktop Pc
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Networking Device 
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Printing & Scanning
            </Typography>
            <Typography variant="h6" className={classes.title}>
              PC Parts
            </Typography>
            <Typography variant="h6" className={classes.title}>
              All Other Products
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Repairs
            </Typography>
            <Button className={`${classes.Btn} ${classes.title}`} >Our Deals</Button>
            <div>
              <Button className={`${classes.Btn} ${classes.Login}`}color="inherit">Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        
      </Box>
    </Container>
    
  )
  
}

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'block',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        height: 136,
    },
    Toolbar: {
      justifyContent: "space-evenly"

    },
    firstBox: {
        backgroundColor: '#020202',
        minHeight: 44,
        width: '100%',
    },
    box1box: {
      maxWidth: 1398,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#FFFFFF',
      margin: 'auto',
      padding: 10      
    },
    box1boxItem: {
      display: 'flex',
    },
    text: {
      lineHeight: '18px', 
      fontSize: 12,
      alignSelf: 'center',
    },
    icon: {
      fontSize: '1.5ram',
      marginLeft: '8px',

    },
    box2: {
      maxWidth: 1398,
      margin: 'auto'
    },

    appBar: {
      backgroundColor: '#FFF',
      color: '#000',
      boxShadow: 'none',
    },
    Login: {

    },
    Btn: {
      border: 'solid 2px blue',
      fontWeight: "bold",
      borderRadius: '50px',
    },
    root: {

    },
    menuButton: {
      
    },
    title: {
      fontSize: 14,
      lineHeight: '21px',
      marginRight: 25, 
    },
}))

export default Header;
