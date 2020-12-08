import React from 'react'
import { Container, makeStyles, Box, Typography} from '@material-ui/core'


const Footer = () => {
  const classes = useStyle()

  return(
    <div className={classes.wrapper}>
       <Container className={classes.container}>
          <Box className={classes.upperBox}>
            <Typography variant="h3" className={classes.title}>
              Deluxe Doors from YAHYOKHAN
            </Typography>
            <Typography variant="inherit" className={classes.description}>
              Keep your room safe with our doors
            </Typography>
          </Box>
          <Box className={classes.lowerBox}>
            <ul className={classes.list}>
              <li className={classes.listItemTitle}>Address</li>
              <li className={classes.listItem}>Address: Risoviyni yo`lidagi qaysidur astanovkani orqasi</li>
              <li className={classes.listItem}>Phones: (00) 1234 5678</li>
              <li className={classes.listItem}>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</li>
              <li className={classes.listItem}>Friday: 9:00 AM - 6:00 PM</li>
              <li className={classes.listItem}>Saturday: 11:00 AM - 5:00 PM</li>
              <li className={classes.listItem}>E-mail: Yahyoshop@email.com</li>
            </ul>
          </Box>
       </Container>
    </div>
  )
}

const useStyle = makeStyles(() => ({
  wrapper: {
    width: '100%',
    backgroundColor: 'black',
    padding: '50px 10px'
  },
  container: {
    width: '100%',
    maxWidth: 1280,
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  upperBox: {
    width: '340px',
    color: 'white',
    minWidth: 340
  } ,
  title: {
    fontSize: 38,
    lineHeight: '50px',
  },
  description: {
    marginTop: 9,
    fontSize: 16,
    lineHeight: '21px'
  },
  lowerBox: {
    width: '340px',
    minWidth: 340,
    color: 'white'
  },
  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingInlineStart: 0,
  },
  listItemTitle: {
    fontSize: 15,
    lineHeight: '40px',
    color: 'grey'
  },
  listItem: {
    fontSize: 13,
    lineHeight: '19px',

  }

}))

export default Footer;