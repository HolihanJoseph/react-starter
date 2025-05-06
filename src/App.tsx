import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
function App() {

  return (
    <Router>
      <div className="max-w-screen-2xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
