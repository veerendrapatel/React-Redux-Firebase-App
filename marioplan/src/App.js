import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AwaitingA from './components/auth/Awaiting'
import CreateProject from './components/projects/CreateProject'
import UpdateProject from './components/projects/UpdateProject'
import BarCreate from './components/qrcode/BarCreate'
import Visitor from './components/qrcode/Visitor'
//import UnderCons from './UnderCons'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/approvalWaiting' component={AwaitingA}/>
            <Route path='/refresh' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route path='/update/:id' component={UpdateProject} />
            <Route path='/qrcode/barcreate' component={BarCreate} />
            <Route path='/qrcode/visitor' component={Visitor} /> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
