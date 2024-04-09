import React, { useState,useEffect } from 'react';
import './Register.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import './User.css';
// import {navigate} from useNavigate;


function Card() {
      
           
     
    const navigate=useNavigate();

    const[data,setData]=useState([]);

    const[prod,setProduct]=useState([]);
      
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

      const id=localStorage.getItem("cardId");
       

     async function getProducts(){
            const products= await axios.get(`http://localhost:8088/get/book/${id}`);
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

         <h1>Welcome card page</h1>
             
          {/* <div class="container-prod"> */}
         { 
            
            //  product.map((prod)=>{
                
                    
               <div class="card1">
                    <div>
                      < h1>{prod.bookName}</h1>
                        <div class="img"><img src="https://m.media-amazon.com/images/I/41zISqNi1uL._SY445_SX342_.jpg"/></div> 
                   </div>
                
                <div class="text"> 
                    <h5>Price :₹ {prod.bookPrice}</h5>
                    <h5>authorName: {prod.authorName}</h5>
                    <h5>bookPages: {prod.bookPages}</h5> 
                    <h5>publisherName:{prod.publisherName}</h5> 
                    <h5>BookAvailable:{prod.availableBook}</h5> 
                    <p><h5>Description:</h5> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, inventore corrupti atque enim ipsa harum magni velit est odit distinctio ad non in id sapiente voluptatum saepe iusto asperiores commodi!</p>
                    <button>Buy Now</button>
                  </div>
                    
             </div>

                }
          
          </div> 
         
        
      
             
        //  </div> 
    )

   
}

export default Card;
