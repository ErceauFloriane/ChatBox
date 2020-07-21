import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connexion from './components/Connexion'
import Notfound from    './components/NotFound'
import Floriane from './components/Floriane'
import './components/Message'
//import Message from './components/Message'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route path='/pseudo/:pseudo' component={App} />
            <Route component={Notfound} />
            <Route component={Floriane}/>
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
