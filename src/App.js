import { useEffect } from "react";
import Content from "./Content";
import { BrowserRouter } from 'react-router-dom';



function App() {


  useEffect(() => {
    const timer = setTimeout(() => {

      var preloader = document.getElementById('loading');
      var postloader = document.getElementById('afterloading');
      preloader.style.display = 'none';
      postloader.style.display = 'block';

    }, 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div id="afterloading">
        <BrowserRouter basename="/Techicious-Web">
          <Content />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
