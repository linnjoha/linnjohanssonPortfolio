import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Hero, Works } from "./components/index";
import RootLayout from "./components/layout/RootLayout";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/linnjohanssonPortfolio/"}
    >
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
