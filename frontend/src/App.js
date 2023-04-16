import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/pages/home';
import PageNotFound from './components/pages/pagenotfound';
import RegisterTournament from './components/pages/registerTournament';
import AddPlayer from './components/pages/addPlayer';
import Tournament from './components/pages/tournament';
import GameDetails from './components/pages/gameDetails';
import UpdateTourNament from './components/pages/updateTournament';
import EditPlayer from './components/pages/editPlayer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-tournament' element={<RegisterTournament />} />
          <Route path='/register-player' element={<AddPlayer />} />
          <Route path='/register-player' element={<AddPlayer />} />
          <Route path='/update-tournament/:id' element={<UpdateTourNament />} />
          <Route path='/update-player/:id' element={<EditPlayer />} />
          <Route path='/game-detail/:id' element={<GameDetails />} />
          <Route path='/tournament' element={<Tournament />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
