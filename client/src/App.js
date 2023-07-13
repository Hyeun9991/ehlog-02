import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
