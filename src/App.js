import Navbar from './components/Navbar';
import './App.css';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className='container'>
        <h1>General performance Analysis</h1>
      </header>
      <ProductsList/>
    </div>
  );
}

export default App;
