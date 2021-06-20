import './App.css';
import './index.css';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <div className="Color h-screen">
        <Navbar/>
        <LandingPage/>
        </div>
        <div className="Color h-2/6">
        <Footer/>
      </div>
    </>
  );
}

export default App;
