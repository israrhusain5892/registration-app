import React, { useState,useEffect } from 'react';
import './Register.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import './User.css';
// import {navigate} from useNavigate;


function Home() {
      
           
     
    const navigate=useNavigate();

    const[data,setData]=useState([]);

    const[product,setProduct]=useState([]);
      
    const user=JSON.parse(localStorage.getItem("data"));

    async function getuser1(){
        const res2 =await axios.get(`http://localhost:8080/find/user/${user.email}`);
        
             setData(res2.data)
        }
           
     useEffect( ()=>{
         getuser1();
     },[])


      function logout(){
            navigate("/");
      }


     async function getProducts(){
            const products= await axios.get("https://fakestoreapi.com/products");
            setProduct(products.data)
            console.log(products);
      }

      useEffect(()=>{
          getProducts();
      },[])

   
          
     

      
    
  return (
    <div className="Register">
        <nav>
            <div class="links">
                <Link to="/register" className="link">Register</Link>
                {/* <Link to="/register" className="link">Login</Link> */}
            </div>
            
        
        </nav>

         <h1>Welcome to Home</h1>
             
          <div class="container-prod">
         { 
            
             product.map((prod)=>{
               
               return  <div class="card">
                     <div class="img"><img src={prod.image}/></div> 
                      <h4>{prod.title}</h4>
                      <div class="card-price">

                      <span>Price :₹ {prod.price}</span>
                      <button>Buy Now</button>
                      </div>
                      
                </div>

           
            })

             
            
         }
          </div> 
         
        
      
             
         </div> 
    )

   
}

export default Home;
