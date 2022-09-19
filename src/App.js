import Navbar from './components/Navbar';
import './App.css';
import ProductsList from './components/ProductsList';
import PriceEvolution from './components/PriceEvolution';
import PresenceProduct from './components/PresenceProduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className='container'>
        <h1>General performance Analysis</h1>
      </header>
      <section className='container graficos'>
        <div>
          <h2>Price Evolution</h2>
          <PriceEvolution/>
        </div>
        <div>
          <h2>Presence Share by Product</h2>
          <PresenceProduct/>
        </div>
      </section>
      <ProductsList/>
    </div>
  );
}

export default App;
