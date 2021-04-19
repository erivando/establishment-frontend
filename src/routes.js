import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Establishments from './components/Establishment'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Register from './components/Register'
import CreateEstablishment from './components/Establishment/createEstablishment'
import history from './service/history'

const Routes = () => {
  return(
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Establishments} />
        <Route path="/establishment/create" component={CreateEstablishment} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
