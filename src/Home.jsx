import React, { useState,useEffect } from 'react';
import './Register.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import './User.css';
// import {navigate} from useNavigate;
import Base from './components/Base';


function Home() {
      
           
     
    const navigate=useNavigate();

    const[data,setData]=useState([]);

    const[product,setProduct]=useState([]);
      
    const user=JSON.parse(localStorage.getItem("data"));

    // async function getuser1(){
    //     const res2 =await axios.get(`http://localhost:8080/find/user/${user.email}`);
        
    //          setData(res2.data)
    //     }
           
    //  useEffect( ()=>{
    //      getuser1();
    //  },[])


      function logout(){
            navigate("/");
      }


     async function getProducts(){
            const products= await axios.get("http://localhost:8088/get/books");
            setProduct(products.data)
            console.log(products);
      }

      useEffect(()=>{
          getProducts();
      },[])

   
       function view(e,id){
              e.preventDefault();
            
              localStorage.setItem("cardId",id);
              navigate("/view");
       }   
     

      
    
  return (

    
    
    <div className="Register">
       
          <nav><Link to="/register" className="link">register</Link> </nav>

         <h1>Welcome to Home</h1>
             
          <div class="container-prod">
         { 
            
             product.map((prod)=>{
               
               return  <div class="card">
                     <div class="img"><img src="https://m.media-amazon.com/images/I/41zISqNi1uL._SY445_SX342_.jpg"/></div> 
                      <h4>{prod.bookName}</h4>
                      <div class="card-price">

                      <span>Price :₹ {prod.bookPrice}</span>
                      <button onClick={(e)=>view(e,prod.bookId)}>view Now</button>
                      </div>
                      
                </div>

           
            })

             
            
         }


          </div> 
         
        
         
         
         </div> 

        //  </Base>
        
    )
    
   
   
}

export default Home;
