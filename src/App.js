import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Views Imports
import Home from "./views/home/home"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
