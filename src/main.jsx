import React, { UseState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./style/main.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/thememode";
import Navbar from "./components/utils/navbar";
import AppRoutes from "./components/utils/routes";
import Footer from "./components/utils/footer";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
