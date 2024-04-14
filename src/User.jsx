
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import logo from './img/businessman.png';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './Register.css';
import './User.css';
import Card from './Card';
import Base from './components/Base';
import { doLogout } from './Auth';
import React from 'react';
import { Toast } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';


function User() {

    const navigate=useNavigate();
     const[book,setBook]=useState([]);
    const[data,setData]=useState([]);
    const[bookName,setbookName]=useState("");
    const[bookPages,setbookPages]=useState("");
    const[authorName,setauthorName]=useState("");
    const[publisherName,setpublisherName]=useState("");
    const[availableBook,setAvailableBook]=useState("");
    const[publishDate,setpublishDate]=useState("");
    const[bookPrice,setBookPrice]=useState("");
    const[numberofbookissued,setNumberofbookissued]=useState("");
    const[list,setSizeList]=useState([]);
    
    

    const[product,setProduct]=useState([]);
      
    const user=JSON.parse(localStorage.getItem("data"));
      console.log(user);

    async function getuser1(){
        const res2 =await axios.get(`http://localhost:8088/find/user/${user.email}`);
        
             setData(res2.data)
        }
           
     useEffect( ()=>{
         getuser1();
     },[])


      function logout(){
             doLogout(()=>{
              navigate("/");
             });
           
      }


     async function getProducts(){
            const products= await axios.get("http://localhost:8088/get/books");
            setProduct(products.data)
            console.log(products);
      }

      useEffect(()=>{
          getProducts();
      },[])

      
      
      
      
      async function IssuedBook(e,id){
             e.preventDefault();
             try{

              const res= await axios.get(`http://localhost:8088/get/book/${id}`);
              const books=JSON.parse(localStorage.getItem(`${user.email}`)) || [];
              books.push(res.data);
              localStorage.setItem(`${user.email}`,JSON.stringify(books));
               toast.success("card added successfully !!");

             }

             catch(error){
                  toast.error("some thing went wrong !!");
             }
          
        }


         var size1=0;
         if(localStorage.getItem(`${user.email}`)==null){
             size1=0;
         }
         else{

          
             size1=JSON.parse(localStorage.getItem(`${user.email}`)).length;
         }

         const[size,setSize]=React.useState(
           size1
      );
        
        
       
      function view(e,id){
        e.preventDefault();
        localStorage.setItem("cardId",id);
        navigate("/view");
     }   


     function goCard(){
       navigate("/user/card");
     }


  return (
    
    
       
    <div className="Register">
        <ToastContainer position='top-center'></ToastContainer>
          <nav>
          
            <div class="nav-com1">
              
              <span>Book card added: {size}</span>
              <span>User: {data.name}</span>
              <button onClick={logout} className="link1">log out</button>

            </div>
            <img src={logo}></img>
            <button onClick={goCard}>View cards</button>
         </nav>
          
          <h1>WLCOME TO USER DASHBOARD</h1> 

          <div class="container-prod">
         { 
            
             product.map((prod)=>{
               
               return  <div class="card">
                     <div class="img"><img src="https://m.media-amazon.com/images/I/41zISqNi1uL._SY445_SX342_.jpg"/></div> 
                      <h4>{prod.bookName}</h4>
                      <div class="card-price">

                      <span>Price :₹ {prod.bookPrice}</span>
                      <button onClick={(e)=>view(e,prod.bookId)}>view</button>
                      <button onClick={(e)=>IssuedBook(e,prod.bookId)}>addcard</button>
                      </div>
                      
                </div>

           
            })
            
          }
       </div> 
         

        
 </div>
         
  );
}

export default User;
