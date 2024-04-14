import { useEffect, useState } from "react";
import axios from 'axios';
// import "./User.css";
import './User.css';
import React from "react";
import Base from "./components/Base";
import { useNavigate } from "react-router-dom";


const Cardview=()=>{

       const navigate=useNavigate();

       const[number,setNumber]=useState("");
       const[bookName,setBookName]=useState("");
       
      const user=JSON.parse(localStorage.getItem("data"));
      const list=JSON.parse(localStorage.getItem(`${user.email}`));
        const[card,setCard]=React.useState(
            // 
             list  

        );

        const[size,setSize]=React.useState(
             list.length
        )
         var amt=0;
        list.map((list1)=>{
            amt+=list1.bookPrice;   
        })
        const[amount,setAmount]=React.useState(
             amt
        )


   const IssueBook=async (e,id)=>{
         e.preventDefault();
         try{
              const res=await axios.get(`http://localhost:8088/get/book/${id}`);
              localStorage.setItem("issuebookId",JSON.stringify(res.data));
         }

         catch(error){
            alert("some errro");
         }
        
          
         
          navigate("/user/issuebook");
   }
       
    
    function removeCard(id){
            // e.preventDefault();
            alert("remove")
            const newList=card.filter((l)=>l.bookId!==id);
            setCard(newList);
            setAmount(amount)
            localStorage.setItem(`${user.email}`,JSON.stringify(newList));
    }
    
    return(
          <Base>
         <div className="cardview1">
            <div><h2>Added books for Issued</h2></div>
        <div className="cardview">
         <div class="container-card">
         
         { 
            
             
               card.map((card)=>{
                   return <div class="card">
                     <div class="img"><img src="https://m.media-amazon.com/images/I/41zISqNi1uL._SY445_SX342_.jpg"/></div> 
                      <h4>{card.bookName}</h4>
                      <div class="card-price">

                      <span>Price :₹ {card.bookPrice}</span>
                      <button onClick={()=>removeCard(card.bookId)}>remove card</button>
                      <button onClick={(e)=>IssueBook(e,card.bookId)}>IssueBook</button>
                      {/* <button onClick={(e)=>remove(e,prod.bookId)}>view Now</button> */}
                      </div>
                      
                     </div>
               })

        
                }
           
        

             
            
         


          </div> 

          {/* <div className="card-detail">
                 <table>
                      <tr>
                          <th>Total Book: </th>
                          <td>{size}</td>
                      </tr>
                      <tr>
                          <th>Total Book Price: {amount} </th>
                          <td>{size}</td>
                      </tr>

                      <tr>
                         <label for="number">Enter Days for book is issued</label>
                        <input type="number" name="number"
                           value={number}
                           onChange={(e)=>setNumber(e.target.value)}
                        /> 
                      </tr>
          
                       <button onClick={handleBook}>Issue Book</button>
                 </table>
                 {/* <p><span>Total book :</span> {size}</p> 
              <p><span>Total book price : {amount}</span></p>  */}
                
          
         </div> 

         </div>

         </Base>

    )
      
}
export default Cardview;