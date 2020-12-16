import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Products from './Components/Products/Products'
import Header from './Components/@common/Header'
import Footer from "./Components/@common/Footer";
import Home from "./Components/Home/Home";

function App() {
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      <Footer />
      </Router>
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
