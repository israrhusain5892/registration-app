
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import User from './User';
import Home from './Home';
import Card from './Card';
import Nav from './Nav';
import Base from './components/Base';

import About from './About';
import PrivateRoute from './components/PrivateRoute';
import Cardview from './Cardview';
import Issuebook from './Issuebook';



function App() {
  return (
    <div className="App">
  
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register></Register>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
               
                <Route path="/" element={<Home/>}></Route>
                <Route path="/view" element={<Card></Card>}></Route>
                <Route path="/user" element={<PrivateRoute/>}>
                    <Route path="dashboard" element={<User/>}/>
                     <Route path="card" element={<Cardview/>} />
                     <Route path="issuebook" element={<Issuebook/>}/>
                </Route>
                
            </Routes>

            {/* <Nav/> */}
        {/* <Base/> */}
         {/* <About/> */}
        </BrowserRouter>
       
        
    </div>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
