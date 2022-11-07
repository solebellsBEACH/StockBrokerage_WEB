import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home, NotFound404 } from "./pages";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  -- */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
