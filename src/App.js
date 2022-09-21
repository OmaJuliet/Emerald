import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Navbar from "./component/Navbar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add" element={<AddEdit />}/>
          <Route path="/update/:id" element={<AddEdit />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
