import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Register from "@/pages/Register";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang-ky" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
