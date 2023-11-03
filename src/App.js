import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        {/* <Routes>
          <Route path="/" element={((<Header />), (<Home />))} />
        </Routes> */}
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
