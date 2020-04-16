import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from './pages/Login/index'
import Pokemon from './pages/Pokemon/index'
import TypesPokemon from './pages/TypesPokemon/index'
import Details from './pages/Details/index'
import { isAuthenticated } from './services/auth'

import NotFound from './NotFound'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
        )}
    />
)

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Pokemon} />
                <Route path="/login" component={Login} />
                <Route path="/types" component={TypesPokemon} />
                <PrivateRoute path="/details" component={Details} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
