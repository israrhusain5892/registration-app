
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
// import axios from  './api';
import { doLogout } from './Auth';
import { useNavigate } from 'react-router-dom';
import { getPost } from './services';
// import { axios } from 'axios';
import axios from 'axios';
import logo from './img/businessman.png';


function Dashboard() {

        //  const [isLogin,setIsLaogin]=useState(false);
         const[data,setData]=useState([]);
         const [userdata,setUserdata]=useState(null);
         const navigate=useNavigate();

          const user=JSON.parse(localStorage.getItem("data"));
          // console.log(user.email);
          
          const url = `https:localhost:8080/find/user/${user.email}`;
          useEffect(()=>{
                 fetch(`http:localhost:8080/find/user/imran@gmail.com`).then(response=>{
                      console.log(response)
                 }).catch(error=>{
                    console.log(error);
                 })
          },[])

          // console.log(getPost(url))
         
         

         async function getuser1(){
             const res2 =await axios.get(`http://localhost:8080/find/user/${user.email}`);
             
                  setData(res2.data)
             }
                
         

         useEffect( ()=>{
              getuser1();
              // getPost(url);
              
              
         },[])

        //  console.log(userdata);


              
         const logout= async (e)=>{
                e.preventDefault();

             const res= await fetch(`http://localhost:8080/logout/${user.email}`,{
                 method:'PUT',
             }
               
             );
          
              navigate("/login")
             
          }


        //  async function getUsers(){
        //     const res1=await axios.get('http://localhost:8080/get/users');
           
        //     setData(res1.data);
        //     console.log(res1);
            
            
        // }

        console.log(data);

        //  useEffect(()=>{
               
        //   // fetchInfo();  
         
        //   getUsers();
 
        // },[])

      
      //  var curuser=data;

  return (
    <div className="Dashboard">
      
           <nav>
            
            <div class="nav-com">
              
              <span>Admin: {data.name}</span>
             <button onClick={logout} className="link1">log out</button>

            </div>
            <img src={logo}></img>
        
         </nav>
         <h1>Welcome to My Admin Dashboard</h1>
         
          <table>

            
                 <thead>

                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>LoginTime</th>
                    <th>LoginDate</th>
                    <th>LogoutTime</th>
                    <th>LogoutDate</th>
                    
                  </tr>
                      
                 </thead>
                 
                {
                
                   

                 
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.loginTime}</td>
                      <td>{data.loginDate}</td>
                      <td>{data.logoutTime}</td>
                      <td>{data.logoutDate}</td>
                      
                  </tr>
                   }  

                
                
                
              
                
            
          </table>
          
        
          
        
       </div>
  );
}

export default Dashboard;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
