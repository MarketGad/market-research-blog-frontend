import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Startup from './components/Startup';
import Venturehack from './components/VentureHack';
import Industry from './components/Industry';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Form from './components/Form';
import AboutUs from './components/Aboutus';
import Dashboard from './components/dashboard';
import submitidea from './components/submitidea';
import Whatwedo from './components/Whatwedo';
import Privacy from './components/Privacy';
import I1001 from './components/articles/industry/1001';
import I1002 from './components/articles/industry/1002';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/form' component={Form} />
            <Route exact path='/whatwedo' component={Whatwedo} />
            <Route exact path='/industry' component={Industry} />
            <Route exact path='/submitidea' component={submitidea} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path='/startup' component={Startup} />
            <Route exact path='/venturehack' component={Venturehack} />
            <Route exact path='/i1001' component={I1001} />
            <Route exact path='/i1002' component={I1002} />
            {/* <Route exact path='/i1003' component={I1003} />
            <Route exact path='/i1004' component={I1004} />
            <Route exact path='/i1005' component={I1005} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
