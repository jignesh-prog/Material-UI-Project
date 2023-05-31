

import './App.css';
import {Login} from './Components/Login';
import {Dashbord} from './Components/Dashbord';
import {Information} from './Components/Information';
import {Registration} from './Components/Registration';
import {Features} from './Components/Features';
import {Nomatch} from './Components/Nomatch'
import {Routes,Route, BrowserRouter} from 'react-router-dom'

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='Dashbord' element={<Dashbord/>}>
        <Route path='Features' element={<Features/>}/>
        <Route path='Registration' element={<Registration/>}/>
        <Route path='Information' element={<Information/>}/>
        <Route path='*' element={<Nomatch />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
