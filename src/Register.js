import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';


function Register() {
    // let navigate=useNavigate;
  return (
    <div className="Register">
        <nav>
             <Link to="/login" class="link">Login</Link>
        
        </nav>
         <div className="container">
              <h2>Register here</h2>
            <form>
               <input type="text" placeholder="enter your name"></input>
               <input type="email" placeholder='email'></input>
               <input type="password" placeholder='password'></input>
               <br></br>
               <br></br>
               <Link to='/login' class="login"><a>If you are not login ?</a> Login here</Link>
               <br></br>
               <button type="submit">Register</button>
                
            </form>
         </div>
    </div>
  );
}

export default Register;
