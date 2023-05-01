import { BrowserRouter, Router } from "react-router-dom";
import AppRouter from "./Router";
import Preloder from "./components/Preloder";
import { useEffect, useState } from "react";

function App() {
  const [isLoader, setIsLoader] = useState(false);

  setTimeout(() => {
    localStorage.setItem("isLoader", true);
    setIsLoader(localStorage.getItem("isLoader"));
  }, 5000);

  useEffect(() => {
    setIsLoader(localStorage.getItem("isLoader"));
  }, [isLoader]);
  return (
    <>
      <BrowserRouter basename="/Techicious-Web">
        {isLoader === "true" ? <AppRouter /> : <Preloder />}
      </BrowserRouter>
    </>
  );
}

export default App;
