import logo from './logo.svg';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes></Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
