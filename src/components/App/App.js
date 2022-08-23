import './App.css';
import {HashRouter as Router, Navigate, Route, Routes,} from 'react-router-dom'

import { Nav } from '../Nav/Nav';
import { HomePage } from '../Home/Home';
import { AboutMe } from '../AboutMe/AboutMe';
import { Projects } from '../Projects/Projects';
import { Contact } from '../Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>

          <Route path='/' element={<Navigate replace to="/home" />} />

          <Route path='/home' element={<HomePage />}/>

          <Route path='/about' element={<AboutMe />} />

          <Route path='/projects' element={<Projects />} />

          <Route path='/contact' element={<Contact />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
