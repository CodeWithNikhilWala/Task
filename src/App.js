import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import Item from './Components/Item';
import FourCard from './Components/FourCard';
import About from './Components/About';
import Top from './Components/Top'
import Discover from './Components/Discover';
import Today from './Components/Today';
import FeedBack from './Components/FeedBack';
import Footer from './Components/Footer';

function App() {
  return (
  <>
  <Search/>
    <Header/>
    <Item/>
    <FourCard/>
    <About/>
    <Top/>
    <Discover/>
    <Today/>
    <FeedBack/>
    <Footer/>
  </>
  );
}

export default App;
