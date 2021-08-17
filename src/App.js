import { HashRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Navbar from './components/Navbar';
import List from './components/List';
import Client from './components/Client';
import Call from './components/Call';
import Toggle from './components/toggle';


function App() {
  return (
    
    <div className="" style={{backgroundColor:'#add8e6',height:"100vh"}} >
   
    <Navbar/>
       <HashRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/call" component={Call} />
        <Route exact path="/toggle" component={Toggle} />
      </Switch>
    </HashRouter>
   
    </div>
  );
}

export default App;
