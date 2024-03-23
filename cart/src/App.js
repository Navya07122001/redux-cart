import './App.css';
import Header from './Components/Header';
import { useEffect } from 'react';
import {Routes,Route} from "react-router-dom";
import Cardsdetails from './Components/Cardsdetails';
import Cards from './Components/Cards';
import WebFont from 'webfontloader';
import { ThemeProvider } from '@mui/material';
import {createTheme} from '@mui/material';
function App() {
  const theme=createTheme({
    typography:{
    fontFamily:'Chilanka'
    }
  })
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
       <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}></Route>
        <Route path='/cart/:id' element={<Cardsdetails/>}/>

        
      </Routes>
    

    </div>
    </ThemeProvider>
  );
}

export default App;
