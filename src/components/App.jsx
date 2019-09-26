import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home'
import Nav from './Nav'
import About from './About'
import Works from './Works'
const App = () => {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/(about|works)/" component={Nav} />
      <Route path="/about" component={About} />
      <Route path="/works" component={Works} />

    </div>
    </Router>
  )
}

export default App;
