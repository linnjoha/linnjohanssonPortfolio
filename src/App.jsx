import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import { Hero, Contact, About, Works, Navbar } from "./components/index";
import RootLayout from "./components/layout/RootLayout";
import "./styles/app.css";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<RootLayout />}>
//         <Route index element={<Hero />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/work" element={<Works />} />
//         <Route path="/contact" element={<Contact />} />
//       </Route>
//     </Route>
//   )
// );

function App() {
  return (
    <>
      <RootLayout />
      <Routes>
        {/* <Route path="/" element={<RootLayout />} /> */}
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
