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

    }, 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <div id="afterloading">
        <BrowserRouter basename="">
          <Content />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
