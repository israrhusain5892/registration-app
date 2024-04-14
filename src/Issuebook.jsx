import React, { useState } from 'react';
import axios  from 'axios';
import Base from './components/Base';
import './User.css';
import { Toast } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Issuebook() {
        
    const[number,setNumber]=useState("");
    // const[bookName,setBookName]=useState("");
    const[totalBook,setTotalBook]=useState("");

    const navigate=useNavigate();

    const card1=JSON.parse(localStorage.getItem("issuebookId"));
    
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


const handleBook=async (e)=>{
      e.preventDefault();
       try{

        await axios.post(`http://localhost:8088/issue/book/${user.email}`,{
            method:'POST',
             bookName:card1.bookName,
            totalBookPrice:card1.bookPrice,
            numberofbookissued:totalBook,
            numberofDays:number,
            
 
        })

       
        localStorage.removeItem("issuebookId");
        toast.success("Book issued successfully !!");

       }
       catch(eror){

           toast.error("some went wrong !!");
             
       }
        
        
     
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
       <ToastContainer position='top-center'></ToastContainer>
      <div className="cardview1">
         <div><h2>Added books for Issued</h2></div>
     <div className="cardview">
      <div class="container-card">
      
      { 
         
          
           
                 <div class="card">
                  <div class="img"><img src="https://m.media-amazon.com/images/I/41zISqNi1uL._SY445_SX342_.jpg"/></div> 
                   <h4>{card1.bookName}</h4>
                   <div class="card-price">

                   <span>Price :₹ {card1.bookPrice}</span>
                   <button onClick={()=>removeCard(card.bookId)}>remove card</button>
                   {/* <button onClick={(e)=>remove(e,prod.bookId)}>view Now</button> */}
                   </div>
                   
                  </div>
            

     
             }
        
        <div className="card-detail">
              <table>
                    <tr>
                         <th>Book Name :</th>
                         <td>{card1.bookName}</td>
                    </tr>
                   <tr>
                       <label>Total Book</label>
                       <input type="number"
                         
                          value={totalBook}
                          onChange={(e)=>setTotalBook(e.target.value)}
                       />
                   </tr>
                   <tr>
                       <th>Total Book Price: {card1.bookPrice} </th>
                       
                   </tr>

                   <tr>
                      <label for="number">Enter Days for book is issued</label>
                     <input type="number" name="number"
                        value={number}
                        onChange={(e)=>setNumber(e.target.value)}
                     /> 
                   </tr>
       
                   
              </table>
              {/* <p><span>Total book :</span> {size}</p> 
              <p><span>Total book price : {amount}</span></p>  */}
               
               <button onClick={handleBook}>Issue Book</button>
       </div>
       

          
         
      


       </div> 

      
      </div>

      </div>

      </Base>

 )
}

export default Issuebook;