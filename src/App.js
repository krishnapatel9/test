import logo from './logo.svg';
import './App.css';
import Text from './components/Text';
import Profile from './screens/Profile';
import ProfileDetails from './components/ProfileDetails';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-white'> 
        {/* route==/login </Login */}
        {/* route==/register</Register> */}
      
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
        </BrowserRouter>
      {/* <Login/>
      <Register/> */}

   </div>
  )
}

export default App;
