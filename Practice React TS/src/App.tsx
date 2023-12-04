import Navbar from "./components/home/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ImageSliderPage,
  MultiPageFormPage,
  SocialLinks,
  Tabs,
  Tests,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Application from "./components/tests/test getByRole/Application";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="dark">
        <Navbar></Navbar>
        <main className=" min-h-screen min-w-[400px] max-w-full bg-gray-300">
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/social-links" element={<SocialLinks />}></Route>
            <Route path="/tests/" element={<Tests />}>
              <Route path="getByRole" element={<Application />}></Route>
            </Route>
            {/* create projects */}
            <Route path="/image-slider" element={<ImageSliderPage />}></Route>
            <Route path="/tabs" element={<Tabs />}></Route>
            <Route
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
