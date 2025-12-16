import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Homepage from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Customnavbar from './components/Navbar.jsx';
// import Custeomcarousel from './components/Customcarousel.jsx';
import Customcarousel from './components/Customcarousel.jsx';
import { Customspinners } from './components/Customspinner.jsx';
import Displayitems from './components/Fetch.jsx';
import Counter from './components/Counter.jsx';






createRoot(document.getElementById('root')).render( 
  <>
  <Counter/>
  </>
)
