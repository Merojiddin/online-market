import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import StarSharpIcon from '@material-ui/icons/StarSharp';


import head from '../../Assets/images/home/first.png'
import Planshet from '../../Assets/images/home/planshet.png'


const Home = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Box className={classes.box}>
        <CardMedia image={head} className={classes.headPicture} component="img"></CardMedia>
      </Box>  
      <Box className={classes.newProducts}>
        <Box className={classes.newProductsText}>
          <Typography variant="h6" className={classes.newProductsTextText}>New Products</Typography>
          <Button className={classes.newProductsTextBtn}>See all new Products</Button> 
        </Box>
        <Box className={classes.newProductsItems}>
        {
          [1,2,3,4,5,6].map(() => {
            console.log('something')
            return (
              <Box className={classes.newProductsItem}>
                <Typography>In Stock</Typography>
                <CardMedia component="img" image={Planshet} className={classes.newProductsItemPicture}/>
                <div className={classes.newProductsItemStar}>
                  <StarSharpIcon color="primary"/>
                  <StarSharpIcon color="primary"/>
                  <StarSharpIcon color="primary"/>
                  <StarSharpIcon color="primary"/>
                  <StarSharpIcon />
                  <Typography variant="p">Reviews (4)</Typography> 
                </div>
                <Typography variant="h5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</Typography>
                <Typography variant="h4">$499.00 $499.00</Typography>
              </Box>
            )
          })
        }
        </Box>
        
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
    marginBottom: 37,
    backgroundColor: '#B7B7B7',
  },
  headPicture: {
    width: '100%',
    backgroundSize: 'cover',
  },

  newProducts: {

  } ,
  newProductsText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  newProductsTextBtn: {
    textDecoration: 'underline',
    fontSize: 13,
    lineHeight: '15px',
    textAlign: 'right',
  },
  newProductsItems: {
    display: 'flex',
  },
  newProductsItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    width: 234,
    height: 346,
  },
  newProductsItemStar: {
    display: 'flex',
  },
  newProductsItemPicture: {
    width: 150,
    height: 150,
  }
  
}))

export default Home;