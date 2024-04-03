
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import User from './User';
import Home from './Home';

function App() {
  return (
    <div className="App">
  
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register></Register>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/user/dashboard" element={<User/>}></Route>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
