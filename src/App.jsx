import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import React from "./React";
import React from "react";
import JavaScript from "./Java";
function App() {
  const bgStlye = () => {};

  return (
    <div className="container">
      <BrowserRouter>
        <nav className="nav">
          <div className="ovals">
            <div className="oval"></div>
            <div className="ovalY"></div>
            <div className="ovalG"></div>
          </div>
          <ul className="sitenav">
            <li className="sitenavli">
              <NavLink className="li_h3" to="/">
                react
              </NavLink>
            </li>
            <div className="hr"></div>
            <li className="sitenavli">
              <NavLink className="li_h3" to="/javascript">
                JacaScript
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<React />} />
          <Route path="/javascript" element={<JavaScript />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
