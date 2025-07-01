import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Catalog from './pages/Catalog'; // ← Descomenta cuando esté listo
// import BookDetail from './pages/BookDetail'; // ← Opcional más adelante

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/catalog" element={<Catalog />} /> */}
        {/* <Route path="/book/:id" element={<BookDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
