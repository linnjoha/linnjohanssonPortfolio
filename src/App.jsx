import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Hero, Contact, About, Works } from "./components/index";
import RootLayout from "./components/layout/RootLayout";
import "./styles/app.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
