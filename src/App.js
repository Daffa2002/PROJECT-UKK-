import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavbarComponent from './components/NavbarComponent';
import Table from './components/Table';
import CariPenerbangan from './components/CariPenerbangan';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import calender from "react-calendar";
import './App.css';
import Maskapai from './components/Maskapai';


function App() {

  return (
    <div className="App">
      <NavbarComponent />

      <BrowserRouter >
        <Switch>
        <Route path='/cari-penerbangan'>
            <h2>Halaman cari Penerbangan</h2>
            <CariPenerbangan/>
          </Route>
          <Route path='/'>
            <Maskapai />
          </Route>
          
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
