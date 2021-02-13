import logo from './logo.svg';
import {useState} from 'react';
import Navbar from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [activePage, setActivePage] = useState('about');
  
  const updateActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <Header activePage={activePage} updateActive={updateActivePage}></Header>
      <Routes></Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
