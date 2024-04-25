
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import NotFoudPage from './pages/NotFoudPage';
import ProductListPage from './pages/ProductListPage';



function App() {
  return (
    <div>     
      
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/products' element={<ProductListPage />} />
          <Route path='*' element={<NotFoudPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
