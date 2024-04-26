import './App.css';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomaPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
          <Route path='/products' element={<ProductListPage/>}/>
          <Route path='/products/:id/' element={<ProductPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// if path = '/'
// <div>
//   <Header/>
//   <HomePage/>
// </div>

// if path = '/about'
// <div>
//   <Header/>
//   <AboutPage/>
// </div>

// if path = '/contacts'
// <div>
//   <Header/>
//   <ContactsPage/>
// </div>

// else 
// <div>
//   <Header/>
//   <NotFoundPage/>
// </div>