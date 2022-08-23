import './App.css';
import {HashRouter as Router, Navigate, Route, Routes,} from 'react-router-dom'

import { Nav } from '../Nav/Nav';
import { HomePage } from '../Home/Home';
import { AboutMe } from '../AboutMe/AboutMe';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>

          <Route path='/' element={<Navigate replace to="/home" />} />

          <Route path='/home' element={<HomePage />}/>

          <Route path='/about-me' element={<AboutMe />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
