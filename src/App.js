import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import HomeScreen from './screens/HomeScreen'
import AddNoteScreen from './screens/AddNoteScreen'
import AboutScreen from './screens/AboutScreen'
import Navigation from './components/Navigation'
import {Footer} from './components/Footer'
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Router>
      {/* <Header /> */}
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={AboutScreen} />
            <Route exact path="/signin" component={SigninScreen} />
            <Route exact path="/signup" component={SignupScreen} />
            <Route exact path="/home" component={HomeScreen} />
            <Route exact path="/add-note" component={AddNoteScreen} />
            <Route exact path="/about" component={AboutScreen} />
          </Switch>

        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
