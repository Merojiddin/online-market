import React from 'react'
import {Box, makeStyles} from '@material-ui/core'
import Container from '@material-ui/core/Container'

const Header = () => {
  const classes = useStyle()

  return (
    <Container className={classes.container}>
      <Box className={classes.box1}>
          <Box className={classes.box1box}>
            <div>
              Item 1
            </div>
            <div>
              Item 1
            </div>
            <div>
              Item 1
            </div>
            
          </Box>
      </Box> 
      <Box className={classes.box2}>
        A lot of stuffs
      </Box>
    </Container>
  )
  
}

const useStyle = makeStyles(() => ({
    container: {
        display: 'block',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        height: 136,
    },
    box1: {
        backgroundColor: '#020202',
        minHeight: 44,
        width: '100%',
    },
    box1box: {
      maxWidth: 1398,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#FFFFFF',
      margin: 'auto'

      
    },
    box2: {
      maxWidth: 1398,
      margin: 'auto'
    }
}))

export default Header;
