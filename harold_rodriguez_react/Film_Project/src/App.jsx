import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 
import HomePage from './Pages/HomePage';
import CharacterPage from './Pages/CharacterPage';
import EpisodesPage from './Pages/EpisodesPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {

  return (
    <Router>
      <div>
        <div>
          <nav>
            <ul className='ul'>
              <li><Link className='link' to="/">Start</Link></li>
              <li><Link className='link' to="/characters">Character</Link></li>
              <li><Link className='link' to="/episodes">Episodes</Link></li>
              <li><Link className='link' to="/Notfound">NotFound</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/characters" element={<CharacterPage/>} />
            <Route path="/episodes" element={<EpisodesPage/>} />
            <Route element={<NotFoundPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;