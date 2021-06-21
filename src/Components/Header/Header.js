import React, { useContext } from 'react';
import {Link, useHistory} from "react-router-dom";
import { InfoContext } from '../../App';
import "./Header.css"

const Header = () => {
  const[info, setInfo] = useContext(InfoContext);
  let history = useHistory();
  //....Login button click event
  const handleLogin = () =>{
    history.push("/login")
  }
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand the_Brand" to="/home">Easy-<span className="text-danger">Rider</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-lg-start text-center text-light" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-lg-start text-center text-light" to="/Destination">Destination</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-lg-start text-center text-light" to="/Blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-lg-start text-center text-light" to="/Contact" tabindex="-1">Contact</Link>
              </li>
              <li className="nav-item text-lg-start text-center">
                 {info.istrue ?
                    <button onClick={handleLogin} className="btn btn-success px-4">Login</button>
                   :<Link className="nav-link text-lg-start text-center text-light" style={{fontWeight:'bold'}} to="/">{info.name}</Link>
                 }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
};

export default Header;