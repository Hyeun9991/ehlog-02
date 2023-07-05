import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
