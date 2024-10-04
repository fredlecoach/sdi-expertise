import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Parrainage from './Parrainage';
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/diagnostic" element={ <Home />} />
        <Route path="/parrainage" element={<Parrainage />} />
      </Routes>
    </Router>
  );
}

export default App;