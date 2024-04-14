import React, { useState } from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import axios from "axios";


function Register() {
      const[name,setName]=useState("");
      const[email,setEmail]=useState("");
      const[password,setPassword]=useState("");

     
     
    

      // const fetchInfo = () => {
      //    return fetch('http://localhost:8080/get/users')
      //      .then((res) => res.json())
      //      .then((d) => setData(d))
      //  }
      

      
      // console.log(respone2);
      

      const handleform=async (e)=>{
              e.preventDefault();
            

        try{
            await axios.post('http://localhost:8088/add/user',{
              method:'POST',
              
               name:name,
               email:email,
               password:password 
               
           
              
             });
            // const response=await res.json();
            //  console.log(response);
             alert("Data saved successfully!!");
          }
          catch(error){
             alert("some thing went wrong !!");
          }

          
            // name='',
            // email='',
            // password='',
        }


   
          
     

      
    
  return (
    <div className="Register">
        <nav>
             <Link to="/login" className="link">Login</Link>
        
        </nav>
        
      
             
          
      
         <div className="container">
              <h2>Register here</h2>
            <form onSubmit={handleform}>
               <input type="text" name="name" placeholder="enter your name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
               
               />
               <input type="email" name="email" placeholder='email'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
               
               />
               <input type="password" name="password" placeholder='password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
               
               />
               <br></br>
               <br></br>
               <Link to='/login' class="login"><span>If you are not login ?</span> Login here</Link>
               <br></br>
               <button type="submit">Register</button>
                
            </form>
             
           
         </div>
    </div>
  );


   
}

export default Register;
