import { Route, Routes } from 'react-router-dom';
import { AppBar } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className=" bg-dark min-h-screen">
      <AppBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
