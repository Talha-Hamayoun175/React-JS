import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MyComponent from "./components/mycomponent";
import Header from "./components/header.jsx";
import ListApp from "./components/list.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileCard from "./components/ProfileCard.jsx";
import reactLogo from "./assets/1.jpg";
import reactLogo1 from "./assets/2.jpg";
import reactLogo2 from "./assets/3.jpg";
import reactLogo3 from "./assets/4.jpg";
import ProductGrid from "./components/FetchAPI.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Google from "./components/Google.jsx";
import Weather from "./components/Weather.jsx";
import Tailwind from "./components/Tailwind.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
          <Route path="/google" element={<Google />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
      </Router>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          < ListApp />
        </div>
        <div className="col-md-6">
          <MyComponent />
        </div>
      </div>
    </div>
    <section>
      <div className="container mb-5">
        <div className="row">
        <div className="col-md-4 mt-4">
          <ProfileCard
            name="Tom"
            title="Software Engineer"
            image={reactLogo}
            description="A passionate developer with expertise in web development and problem-solving."
          />
        </div>
        <div className="col-md-4 mt-4">
          <ProfileCard
            name="John"
            title="Electrical Engineer"
            image={reactLogo1}
            description="A passionate developer with expertise in web development and problem-solving."
          />
        </div>
        <div className="col-md-4 mt-4">
          <ProfileCard
            name="Doe"
            title="Chemical Engineer"
            image={reactLogo2}
            description="A passionate developer with expertise in web development and problem-solving."
          />
        </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          < ProductGrid />
          </div>
        </div>
      </div>
    </section>
    < App />
  </StrictMode>
);
