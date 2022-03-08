import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/products';
import { useDispatch } from 'react-redux'
import { filtering } from './redux/actions/dataAction'

function App() {
  const dispatch = useDispatch()
  const filter = (e)=>{
    let text = e.target.value
    dispatch(filtering(text));
    console.log(text);
  }
  return (
    <div className="App">
      <nav className="navbar">
        <h4>e-shop</h4>
        <div className="searchbox">
          <input type="text" placeholder='search products' onChange={(e)=>filter(e)}/>
          <button>search</button>
        </div>
        <div className="sidebar">
          <div className="account">
            <i className="far fa-user"></i>
            <small>account</small>
          </div>
          <div className="cart">
            <i className="far fa-cart-arrow-down  fa-flip-horizontal"></i>
            <small>cart</small>
          </div>
        </div>
      </nav>
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={<Products/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
