import Navbar from "./components/home/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  ImageSliderPage,
  MultiPageFormPage,
  SocialLinks,
  Tabs,
  Projects,
  ZodReactHookForms,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useThemeContext();
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className={theme}>
        <Navbar></Navbar>
        <main className="min-h-screen min-w-[400px] max-w-full bg-gray-300 text-black dark:bg-gray-600 dark:text-white">
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="/social-links" element={<SocialLinks />}></Route>
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
