import Navbar from "./components/home/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/aboutme" element={<AboutMe />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
