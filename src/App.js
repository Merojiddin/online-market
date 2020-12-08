import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from './Components/Home/Home'
import Header from './Components/@common/Header'
import Footer from "./Components/@common/Footer";

function App() {
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
}

const useStyle = makeStyles(() => ({
  container: {
    padding: 0,
    margin: 'auto',
    maxWidth: '100%'
  }
}))



export default App;
