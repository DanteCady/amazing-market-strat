import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Views Imports
import Dashboard from "./views/dashboard/dashboard"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/dashboard" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
