import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PagePhotos from "./page/page-photos/page-photos";
import PageLatter from "./page/page-latter/page-latter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="photos" element={<PagePhotos />} />
      <Route path="latter" element={<PageLatter />} />
    </Routes>
  </BrowserRouter>
);
