import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './page/GifExpertApp.jsx';
import './styles.css';
import { FirstApp } from './component';
import { CounterApp } from './component/CounterApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <GifExpertApp />
  // <FirstApp title='Hola, soy Goku' name='Jairo Ramirez Castanio'/>
  <CounterApp value={10}/>
  // </React.StrictMode>,
)
