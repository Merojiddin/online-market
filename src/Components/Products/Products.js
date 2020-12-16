import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';


import Planshet from '../../Assets/images/home/smth.png'
import Door1 from '../../Assets/images/home/door1.jpg'
import Door2 from '../../Assets/images/home/door2.jpg'
import Door3 from '../../Assets/images/home/door3.jpg'
import Door4 from '../../Assets/images/home/door4.jpg'
import Door5 from '../../Assets/images/home/door5.jpg'


const Products = () => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Box className={classes.wrapper}>
        <Box className={classes.section}>
          <Box variant="h4" className={classes.box}>
            <Typography className={classes.title} >
              A Family That Keeps On Growing
            </Typography>
            <Typography variant="overline" className={classes.text}>
              We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              <br /><br />
              Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
            </Typography>
          </Box>
          <CardMedia component="img" className={classes.picture} src={Door3}/>
        </Box>
      </Box>

      <Box className={classes.wrapperWhite}>
        <Box className={classes.section}>
        <CardMedia component="img" className={classes.picture} src={Door4}/>
          <Box variant="h4" className={classes.boxWhite}>
            <Typography className={classes.title} >
              A Family That Keeps On Growing
            </Typography>
            <Typography variant="overline" className={classes.text}>
              We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              <br /><br />
              Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <Box className={classes.section}>
          <Box variant="h4" className={classes.box}>
            <Typography className={classes.title} >
              A Family That Keeps On Growing
            </Typography>
            <Typography variant="overline" className={classes.text}>
              We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              <br /><br />
              Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
            </Typography>
          </Box>
          <CardMedia component="img" className={classes.picture} src={Door5}/>
        </Box>
      </Box>

      <Box className={classes.wrapperWhite}>
        <Box className={classes.section}>
          <CardMedia component="img" className={classes.picture} src={Door1}/>
          <Box variant="h4" className={classes.boxWhite}>
            <Typography className={classes.title} >
              A Family That Keeps On Growing
            </Typography>
            <Typography variant="overline" className={classes.text}>
              We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              <br /><br />
              Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.wrapper}>
        <Box className={classes.section}>
          <Box variant="h4" className={classes.box}>
            <Typography className={classes.title} >
              A Family That Keeps On Growing
            </Typography>
            <Typography variant="overline" className={classes.text}>
              We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              <br /><br />
              Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
            </Typography>
          </Box>
          <CardMedia component="img" className={classes.picture} src={Door2}/>
        </Box>
      </Box>

      <Box className={classes.wrapperWhite}>
        <Box className={classes.section}>
          <CardMedia component="img" className={classes.picture} src={Planshet}/>
          <Box variant="h4" className={classes.boxWhite}>
            <Typography className={classes.title} >
              A Family That Keeps On Growing
            </Typography>
            <Typography variant="overline" className={classes.text}>
              We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store.
              <br /><br />
              Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.
            </Typography>
          </Box>
        </Box>
      </Box>


    </div>
  )
}

const useStyle = makeStyles(() => ({
  container: {
    width: '100%',
    padding: 0,
    marginTop: 50,
    margin: 0,

  },
  wrapper: {
    width: '100%',
    padding: '96px 0px 96px',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',

  },
  section: {
    maxWidth: 1280,
    width: '100%',
    margin: '0px 20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  box: {
    width: 465,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 30,
    marginRight: 20,

  },
  title: {
    fontWeight: 'bold',
    marginbottom: 10,
    fontSize: 44,
    lineHeight: '58px',
  },
  text: {
    marginTop: 32,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: '26px',
  },
  picture: {
    width: 470,
    height: 488,
  },
  wrapperWhite: {
    width: '100%',
    padding: '96px 0 96px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  boxWhite: {
    color: 'black',
    width: 465,
    alignSelf: 'center',
    marginBottom: 30,
    marginLeft: 20,
  }
  
  
}))

export default Products;