import { Route, Routes } from 'react-router-dom';
import { AppBar, SideNav } from './components';
import MusicPlayer from './components/MusicPlayer';
import { Home } from './pages';

const App = () => {
  return (
    <div className=" bg-dark relative">
      <AppBar />
      <div className="md:flex relative">
        <SideNav />

        <div className="md:ml-24 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <div className="fixed bottom-0 z-50">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
};

export default App;
