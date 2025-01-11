import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoinPage from './pages/CoinPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoinPage />} />
        <Route path="/:coinId" element={<CoinPage />} />
      </Routes>
    </Router>
  );
}

export default App;