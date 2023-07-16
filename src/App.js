import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import About from "./Pages/About";
import Guide from "./Pages/Guide";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";


function App() {
  const [progress, setProgress] = useState(10)
  return (
    <NoteState>
      <BrowserRouter>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setProgress ={setProgress} />} />
          <Route path="/login" element={<Login setProgress ={setProgress} />} />
          <Route path="/signup" element={<Signup setProgress ={setProgress} />} />
          <Route path="/about" element={<About setProgress ={setProgress} />} />
          <Route path="/guide" element={<Guide setProgress ={setProgress} />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
