import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

/* reactchallenges.live */

/* Instruction: 
Implment a catch route for all routes which are not under defined routes scope*/

const Home = () => <h1>Home</h1>;
const Settings = () => <h1>Settings</h1>;
const Other = () => <h1>Les autres</h1>;

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/mimporte">M'importe</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Other />} />
      </Routes>
    </Router>
  );
}
