import './App.css';
import {HomePage} from './pages/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import {Fundraise} from './pages/Fundraise'
import {About} from './pages/About'
import {Discover} from './pages/Discover'
import {CardPage} from './pages/CardPage'
import {YourFundraisers} from './pages/YourFundraisers'
import {FundraiserPage} from './pages/FundraiserPage';
import {PaymentPage} from './pages/PaymentPage';

function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/signup" component={Signup}></Route>
        <Route exact path="/fundraise" component={Fundraise}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/discover" component={Discover}></Route>
        <Route exact path="/cardPage" component={CardPage}></Route>
        <Route exact path="/YourFundraisers" component={YourFundraisers}></Route>
        <Route exact path="/FundraiserPage" component={FundraiserPage}></Route>
        <Route exact path="/PaymentPage" component={PaymentPage}></Route>
      </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
