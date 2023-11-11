// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {Fragment, useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider'
function App(){
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
}

const hideCartHandler = () => {
  setCartIsShown(false);
}
  return (
    <CartProvider>
      {/* <h2>Let's Get Started</h2> */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler } />
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
}

export default App;