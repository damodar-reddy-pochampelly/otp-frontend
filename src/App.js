import {BrowserRouter, Switch, Route} from 'react-router-dom'

import SignIn from './components/SignIn'
import Welcome from './components/Welcome'
import Verify from './components/Verify'
import {MobileNumberProvider} from './Context/MobileNumberContext'

import './App.css'

const App = () => (
  <BrowserRouter>
    <MobileNumberProvider>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/verify" component={Verify} />
        <Route exact path="/success-screen" component={Welcome} />
      </Switch>
    </MobileNumberProvider>
  </BrowserRouter>
)

export default App
