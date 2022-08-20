import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Currencies from './components/Currencies/Currencies';
import Fiat from './components/Fiat/Fiat';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* creating nav tag */}
      <nav>
        {/* Link to our homepage */}
        <Link to='/'>
          <h1>Home-Page</h1>
          {/* adding logo for header */}
        </Link>
        <Link to='/Currencies'>
          <h1>Crypto-Currencies</h1>
        </Link>
        <Link to='/Fiat'>
          <h1>Fiat-Currencies</h1>
        </Link>
      </nav>
      <div className='search'>
      </div>
      {/* the main tag contains the paths the applicatuion takes you to after clicking one of the many links */}
      <main>
        {/* container for the route elements */}
        <Routes>
          {/* route path specifies which component a link will take you */}
          <Route path='/' element={<Home />} />
          <Route path="/Currencies" element={<Currencies />} />
          <Route path="/Fiat" element={<Fiat />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
