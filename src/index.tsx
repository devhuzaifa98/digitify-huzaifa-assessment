import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CarouselProvider } from "./context/Carousel";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CarouselProvider>
      <App />
    </CarouselProvider>
  </React.StrictMode>
);
