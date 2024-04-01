
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Login from './Login';

function App() {
  return (
    <div className="App">
  
        <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register></Register>}/>
                <Route path='/login' element={<Login></Login>}/>
            </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
