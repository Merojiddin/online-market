import { Box, Container, makeStyles, Typography, CardMedia } from '@material-ui/core';
import React from 'react'
import ProfilePicture from '../../Assets/images/Profile.jpg'

const Home = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.section}>
          <CardMedia component="img" className={classes.picture} src={ProfilePicture}/>
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
        </Box>
      </Container>
    </div>
  )
}

const useStyle = makeStyles(() => ({
  root: {
    width: '100%'
  },
  container: {
    backgroundColor: "black",
    width: '100%'
  },
  section: {
    maxWidth: '1280px',
    width: '100%',
    margin: '30px auto',
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
}))

export default Home;