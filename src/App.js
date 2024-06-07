import React from "react"
import { BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom"

// Views Imports
import Home from "./views/home"

function App() {
  return (
  <BrowserRouter>
    <Router>
      <Route path="/" component={Home} />
    </Router>
  </BrowserRouter>
  );
}

export default App;
