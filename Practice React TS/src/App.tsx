import Navbar from "./components/home/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ImageSliderPage,
  MultiPageFormPage,
  SocialLinks,
  Tabs,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
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
            <Route index path="/tabs" element={<Tabs />}></Route>
            <Route
              index
              path="/multipageform"
              element={<MultiPageFormPage />}
            ></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
