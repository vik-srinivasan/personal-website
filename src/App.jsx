import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Sports from './pages/Sports';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/sports/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
