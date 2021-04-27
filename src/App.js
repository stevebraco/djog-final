import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from "./components/Screen/HomeScreen/HomeScreen";
import ServicesScreen from "./components/Screen/ServicesScreen/ServicesScreen";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutMeScreen from "./components/Screen/AboutMeScreen/AboutMeScreen";
import ContactScreen from "./components/Screen/ContactScreen.js/ContactScreen";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/services'  component={ServicesScreen} />
        <Route path='/about'  component={AboutMeScreen} />
        <Route path='/contact'  component={ContactScreen} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
