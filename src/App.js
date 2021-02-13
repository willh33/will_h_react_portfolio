import logo from './logo.svg';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from './components/Routes';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes></Routes>
    </>
  );
}

export default App;
