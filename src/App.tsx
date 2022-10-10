import { Route, Routes } from 'react-router-dom';
import { AppBar, SideNav } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className=" bg-dark relative">
      <AppBar />
      <div className="flex relative">
        <SideNav />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
