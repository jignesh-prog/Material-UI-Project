

import './App.css';
import { Login2 } from './Components/Login2';
import { Dashbord } from './Components/Dashbord';
import { Information } from './Components/Information';
import { Registration } from './Components/Registration';
import { Features } from './Components/Features';
import { Main } from './Components/Main';
import { Nomatch } from './Components/Nomatch'
import { Calender} from './Components/Calender'
import {Time} from './Components/Time'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {AuthProvider} from './Components/Auth'
import {Required} from './Components/Required'
function App() {

  return (
    <AuthProvider userName={'Jignesh'}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Required><Login2 /></Required>} />
            <Route path='Dashbord' element={<Required><Dashbord /></Required>}>
              <Route path='Main' element={<Main />} />
              <Route path='Features' element={<Features />} />
              <Route path='Information' element={<Information />} />
              <Route path='Registration' element={<Registration />} >
                <Route path='Calender' element={<Calender/>}/>
                <Route path='Time' element={<Time/>}/>
              </Route>
            </Route>
            <Route path='*' element={<Nomatch />} />
          </Routes>
        </BrowserRouter>
      </div>
      </AuthProvider>
  );
}

export default App;
