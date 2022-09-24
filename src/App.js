import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Navbar from "./component/Navbar";
import EventDetails from "./component/EventDetails";
import MainPage from "./pages/MainPage";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/eventlist" element={<Home />}/>
          <Route path="/add" element={<AddEdit />}/>
          <Route path="/update/:id" element={<AddEdit />}/>
          <Route path="/fulldetails/:id" element={<EventDetails />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
