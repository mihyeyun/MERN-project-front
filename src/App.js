import './app.scss';
import Nav from './components/nav/Nav';
import Main from "./components/main/Main";
import Product from './components/product/Product';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div className="App">
      <Nav />
        <div className='section'>
          <Main />
          <Product />
          <Detail />
        </div>
    </div>
  );
}

export default App;
