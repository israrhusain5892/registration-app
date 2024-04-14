import React, { useEffect } from 'react';
import './Register.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import { userData } from './services';
import { doLogin } from './Auth';
import Base from './components/Base';
// import ReactDOM from "react-dom/client";
// export {showUser} from './Login';
import { Axios } from 'axios';

 
function Login() {
      const navigate=useNavigate();
        
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");

     const [sada,setSada]=useState([]);

   //   const[isLogin,setIsLogin]=useState(false);
      //   const [date, setDate] = useState(new Date());
      //   const[time,setTime]=useState("");

       async function getusers(){
         const res=await axios('http://localhost:8088/get/users')
         setSada(res.data)
         // console.log(res);
     }
  
      useEffect(()=>{

         

         getusers();
        
        },[])

    
    
         const getuser=async (e)=>{
         //  const navigate=useNavigate;
             e.preventDefault();
      
             
             const data1={
              email:email,
              password:password

             }
              const user=await userData(data1);
              
              
              if(user.status===200 && email==="admin@gmail.com"){ 
                   doLogin(data1)
                   return navigate("/dashboard");
                }
                else if(user.status===200) {
                    doLogin(data1)
                    return navigate("/user/dashboard");
                }
                else{
                  alert("invalid username and password !!");
                }
          
             }
            
      
  return (
   
    <div className="Register">
          <nav>
             <Link to="/register" className="link">register</Link>
        
        </nav>
         <div className="container">
              <h2>Login here !!</h2>
            <form onSubmit={getuser}>
              
               <input type="email" name="email" placeholder='email'
               
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
               <input type="password" name="password"  placeholder='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
               
               />
               <br></br>
               <br></br>
               <Link to='/register' class="login"><span>If you are not register ?</span> register here</Link>
               <br></br>
               <button type="submit">Login</button>
                
            </form>
         </div>
         
         
            
         
         
    </div>
   //  </Base>
    
  );
}

 export default Login;
