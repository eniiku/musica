import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppBar, MusicPlayer, SideNav } from './components';
import { Home } from './pages';

const App = () => {
  const { activeSong } = useSelector((state: any) => state.player);

  return (
    <div className=" bg-dark relative">
      <AppBar />
      <div className="md:flex relative">
        <SideNav />

        <div className="md:ml-24 overflow-hidden w-full md:mr-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        {activeSong?.title && (
          <div className="fixed bottom-0 z-50">
            <MusicPlayer />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
