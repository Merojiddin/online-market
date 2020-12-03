import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';


import head from '../../Assets/images/home/first.png'


const Home = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <CardMedia image={head} className={classes.headPicture} component="img"></CardMedia>
      </Box>  
    </Container>
  )
}

const useStyle = makeStyles(() => ({
  container: {
    width: '100%',
    maxWidth: 1398,
    padding: 0,
  },
  box: {
    width: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: '#B7B7B7',
  },
  headPicture: {
    width: '100%',
    backgroundSize: 'cover',
  }
  
}))

export default Home;