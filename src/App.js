import logo from './logo.svg';
import './App.css';
import Form from './component/Form'
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetEmployee from './component/GetEmployee';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Router>
        <Switch>
          <Route path="/" exact component={GetEmployee}></Route>
          <Route path="/add-employee" component={Form}></Route>
        </Switch>
      </Router>
     <FooterComponent/>
    </div>
  );
}

export default App;
