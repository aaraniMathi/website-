import logo from './logo.svg';
import './App.css';
import './Components/0Navbar/Navbar';
import Navbar from './Components/0Navbar/Navbar';
import Banner from './Components/1Banner/Banner';
import Cate from './Components/2Cate/Cate';
import Offer from './Components/3Offer/Offer';
import Footer from './Components/4Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cate />
      <Offer />
      <Footer />
      
    </div>
  );
}

export default App;
