import React from 'react';
import ReactDOM from 'react-dom/client';
import Preloder from "./components/Preloder";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<Preloder/>

<App />

  </React.StrictMode>
);

