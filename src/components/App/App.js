import './App.css';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import { Nav } from '../Nav/Nav';

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
