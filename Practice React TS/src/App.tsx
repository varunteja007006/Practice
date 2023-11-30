import Navbar from "./components/home/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ImageSliderPage, SocialLinks } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="dark">
        <Navbar></Navbar>
        <main className=" min-h-screen min-w-[400px] max-w-full bg-gray-300">
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route index path="/social-links" element={<SocialLinks />}></Route>
            <Route
              index
              path="/image-slider"
              element={<ImageSliderPage />}
            ></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
