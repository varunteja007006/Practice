import Navbar from "./components/home/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ImageSliderPage,
  MultiPageFormPage,
  SocialLinks,
  Tabs,
  Tests,
  Projects,
  ZodReactHookForms,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Application, Accordian } from "./components/tests";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="dark">
        <Navbar></Navbar>
        <main className=" min-h-screen min-w-[400px] max-w-full bg-gray-300 dark:text-black">
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/social-links" element={<SocialLinks />}></Route>
            <Route path="/tests/" element={<Tests />}>
              <Route path="getByRole" element={<Application />}></Route>
              <Route
                path="accordian"
                element={
                  <Accordian>
                    <p>Hello</p>
                  </Accordian>
                }
              ></Route>
            </Route>
            {/* create projects */}
            <Route path="/projects/" element={<Projects />}>
              {/* zod + react form hooks */}
              <Route
                path="zodreacthookforms"
                element={<ZodReactHookForms />}
              ></Route>
              {/* image slider page */}
              <Route path="image-slider" element={<ImageSliderPage />}></Route>
              {/* tabs page */}
              <Route path="tabs" element={<Tabs />}></Route>
              {/* multipage form */}
              <Route
                path="multipageform"
                element={<MultiPageFormPage />}
              ></Route>
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
