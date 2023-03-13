import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { Articles } from './components/Articles';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/articles" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
