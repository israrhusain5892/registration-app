import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';


function Login() {
    // let navigate=useNavigate;
  return (
    <div className="Register">
          <nav>
             <Link to="/register" class="link">register</Link>
        
        </nav>
         <div className="container">
              <h2>Login here !!</h2>
            <form>
              
               <input type="email" placeholder='email'></input>
               <input type="password" placeholder='password'></input>
               <br></br>
               <br></br>
               <Link to='/register' class="login"><a>If you are not register ?</a> register here</Link>
               <br></br>
               <button type="submit">Login</button>
                
            </form>
         </div>
    </div>
  );
}

export default Login;
