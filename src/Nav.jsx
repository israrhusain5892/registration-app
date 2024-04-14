import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUserDetail, isLogin } from "./Auth";
import Login from "./Login";
import logo from './img/businessman.png';
import axios from 'axios';
import './User.css';

const Nav=()=>{

     const [login,setLogin]=useState(false);
     const [user,setUser]=useState(undefined);

     const[data,setData]=useState("");

     const user1=JSON.parse(localStorage.getItem("data"));

        useEffect(()=>{

            setLogin(isLogin());
            setUser(getCurrentUserDetail());
  
        },[login])


        async function getuser1(){
          const res2 =await axios.get(`http://localhost:8088/find/user/${user1.email}`);
          
               setData(res2.data)
          }
             
       useEffect( ()=>{
           getuser1();
       },[])

     return(

         <div className="Register">
                <nav>
                  {
                      login &&(
                        <>
                        
                        <div class="nav-com1">
              
                        {/* <span>Book card added: {size}</span> */}
                        <span>User: {data.name}</span>
                        {/* <button onClick={logout} className="link1">log out</button> */}
                        < button className="link1">logout</button>
                        </div>
                      <img src={logo}></img>
                         
                      <div
                         className="home"
                      ><Link className="Link" to='/user/dashboard'>Home</Link></div>
                        
                         </>

                        
                      )
                         
                      
                      
                  }
                {/* <Link to="/register" className="link">register</Link> */}
        
              </nav>
         </div>   
     );
}
export default Nav;