
import React, { useEffect, useState ,useParam} from 'react';
import { Form, Link } from 'react-router-dom';
import './Register.css';
// import axios from  './api';
import { doLogout } from './Auth';
import { useNavigate } from 'react-router-dom';
import { getPost } from './services';
// import { axios } from 'axios';
import axios from 'axios';
import logo from './img/businessman.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Button, ModalBody, ModalHeader,ModalFooter,FormGroup} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Base from './components/Base';

function Dashboard(args) {

        //  const [isLogin,setIsLaogin]=useState(false);
         const[data,setData]=useState([]);
         const[modal1,setModal1]=useState(false);
         const [userdata,setUserdata]=useState(null);
         const navigate=useNavigate();

         const [loading, setLoading] = useState(true);
        //  const[id]=useParam();
          // const [id,setId]=useState(0);
         const[issuebookData,setIssueBookData]=useState([]);

         const[bookName,setbookName]=useState("");
         const[bookPages,setbookPages]=useState("");
         const[authorName,setauthorName]=useState("");
         const[publisherName,setpublisherName]=useState("");
         const[availableBook,setAvailableBook]=useState("");
         const[publishDate,setpublishDate]=useState("");
         const[bookPrice,setBookPrice]=useState("");

          const user=JSON.parse(localStorage.getItem("data"));
          // console.log(user.email);
          
          // const url = `https:localhost:8080/find/user/${user.email}`;
          // useEffect(()=>{
          //        fetch(`http:localhost:8080/find/user/imran@gmail.com`).then(response=>{
          //             console.log(response)
          //        }).catch(error=>{
          //           console.log(error);
          //        })
          // },[])

          // console.log(getPost(url))
         
         

        //  async function getuser1(){
        //      const res2 =await axios.get('http://localhost:8080/get/users');
             
        //           setData(res2.data)
        //      }
                
         

        //  useEffect( ()=>{
        //       getuser1();
        //       // getPost(url);
              
              
        //  },[])

        //  console.log(userdata);


              
         const logout= async (e)=>{
                e.preventDefault();

             const res= await fetch(`http://localhost:8088/logout/${user.email}`,{
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

        async  function handleform(e){
          e.preventDefault();

       try{
         await axios.post('http://localhost:8088/add/book',{

           method:'POST',
           Headers:{
                'content-type':'application/json'
           },
           bookName:bookName,
           bookPages:bookPages,
           authorName:authorName,
           publisherName:publisherName,
           availableBook:availableBook,
           publishDate:publishDate,
           bookPrice:bookPrice


         }) 
          toast.success("Book saves successfully !!");
         
       } 
       catch(e){
           toast.error("some went wrong try again !!");
       } 
   }



        //  useEffect(()=>{
               
        //   // fetchInfo();  
         
        //   getUsers();
 
        // },[])

        const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

      const toggle1=()=>setModal1(false);
          

         const updateRow= async (id1,e)=>{
          e.preventDefault();
          setModal1(true)
          localStorage.setItem("bookId",id1);
          // toggle();
          const res=await axios.get(`http://localhost:8088/get/book/${id1}`);
          console.log(res.data);
          bookName:setbookName(res.data.bookName);
          bookPages:setbookPages(res.data.bookPages);
          authorName:setauthorName(res.data.authorName);
          publisherName:setpublisherName(res.data.publisherName);
          totalBookPublished:setAvailableBook(res.data.availableBook);
          publishDate:setpublishDate(res.data.publishDate);
          bookPrice:setBookPrice(res.data.bookPrice);
           
         
         
    }

    const handleform1= async (e)=>{
         e.preventDefault();
         const id=localStorage.getItem("bookId");
         console.log(id);

         try{
         const res= await axios.put(`http://localhost:8088/update/${id}`,{
           method:'PUT',
          Headers:{
               'content-type':'application/json'
          },
          // 
           bookName:bookName,
           bookPages:bookPages,
           authorName:authorName,
           publisherName:publisherName,
           availableBook:availableBook,
           publishDate:publishDate,
           bookPrice:bookPrice

            
        }
        

        )
        toast.success(" Book updated successfully !!")
        // setData(res.data);
  }
  catch(error){
        toast.error("some went wrong !!")
  }

//   setId(id1);
  // console.log(id1);


    }



   
    

    const handleCloseModal=()=>{
         setModal1(false);
    } 


    useEffect(()=>{
      axios.get('http://localhost:8088/get/books').then(response=>{
           setData(response.data);
          
      }).catch(error=>{
          console.log("some thing error try again!!"+error);
      })
  },[])

     
     function deleteRow(id,e){
        e.preventDefault();
        axios.delete(`http://localhost:8088/delete/book/${id}`)
         const item=document.getElementById(`${id}`);
         item.remove();
        setLoading(false);
          // alert(id);
     }

     useEffect(()=>{
             axios.get(`http://localhost:8088/get/issuebooks`).then(res=>{
              setIssueBookData(res.data);
             
            }).catch(error=>{
                  alert("some thing errro");
            })
     })
  


      
      //  var curuser=data;

  return (
   
    <div className="Register">
          
           <nav>
            
            <div class="nav-com">
              
              <span>Admin: {data.name}</span>
             <button onClick={logout} className="link1">log out</button>

            </div>
            <img src={logo}></img>
        
         </nav>
         <h1>Welcome to My Admin Dashboard</h1>

         

         <ToastContainer position="top-center" />
         <Button color="danger" onClick={toggle}>
        Add Book
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args} id='container1'>
        <ModalHeader toggle={toggle}>ADD BOOK</ModalHeader>
        <ModalBody className="container2">
       
             
             <div className='container margin-auto'>
                 
                <form onSubmit={handleform}>
                  

                  <input type="text" name="bookName" placeholder="enter your book name"
                    value={bookName}
                    onChange={(e)=>setbookName(e.target.value)}
                   
                   required/>
                    
                   
                  <FormGroup>

                  <input type="number" name="bookpages" placeholder='enter number of book pages'
                     required
                       value={bookPages}
                       onChange={(e)=>setbookPages(e.target.value)}
                   
                   />

                <input type="number" name="bookPrice" placeholder='enter book price'
                     required
                       value={bookPrice}
                       onChange={(e)=>setBookPrice(e.target.value)}
                   
                   />
                    
                    </FormGroup> 
                   <input type="text" name="authorName" placeholder='enter author Name'
                   required
                      value={authorName}
                      onChange={(e)=>setauthorName(e.target.value)}
                   
                   />
    
                    <input type="text" name="publisherName" placeholder='enter publisher Name'
                    required
                      value={publisherName}
                      onChange={(e)=>setpublisherName(e.target.value)}
                   
                   /> 
    
                   
    
                    <input type="number" name="availableBook" placeholder='enter available Book'
                    required
                      value={availableBook}
                      onChange={(e)=>setAvailableBook(e.target.value)}
                   
                   />
    
                    <input type="date" name="publishDate" placeholder='enter publish date'
                      value={publishDate}
                      onChange={(e)=>setpublishDate(e.target.value)}
                      required
                   
                      />
    
                   <br></br>
                   <button id="btn12" type="submit">Submit</button>
                   </form>
                   </div>
               
        </ModalBody>
        {/* <ModalFooter>

          <button type="submit">Submit</button>
          
               
          
        </ModalFooter> */}

        {/* </div> */}

        
                 
               
                
      </Modal>

         {/* updaet code here */}

         
      <Modal isOpen={modal1} onClose={handleCloseModal} id='container1'>
        <ModalHeader toggle={toggle1}>UPDATE BOOK</ModalHeader>
        <ModalBody className="container2">
       
             
             <div className='container margin-auto'>
                 
                <form onSubmit={handleform1}>
                  

                  <input type="text" name="bookName" placeholder="enter your name"
                    value={bookName}
                    onChange={(e)=>setbookName(e.target.value)}
                   
                   required/>


                  <input type="number" name="bookPrice" placeholder='enter number of book price'
                     required
                       value={bookPrice}
                       onChange={(e)=>setBookPrice(e.target.value)}
                   
                   />
                    
                   
                  <FormGroup>

                  <input type="number" name="bookpages" placeholder='enter number of book pages'
                     required
                       value={bookPages}
                       onChange={(e)=>setbookPages(e.target.value)}
                   
                   />
                    
                    </FormGroup> 
                   <input type="text" name="authorName" placeholder='enter author Name'
                   required
                      value={authorName}
                      onChange={(e)=>setauthorName(e.target.value)}
                   
                   />
    
                    <input type="text" name="publisherName" placeholder='enter publisher Name'
                    required
                      value={publisherName}
                      onChange={(e)=>setpublisherName(e.target.value)}
                   
                   /> 
    
                   
    
                    <input type="number" name="availableBook" placeholder='enter availableBook'
                    required
                      value={availableBook}
                      onChange={(e)=>setAvailableBook(e.target.value)}
                   
                   />
    
                    <input type="date" name="publishDate" placeholder='enter publish date'
                      value={publishDate}
                      onChange={(e)=>setpublishDate(e.target.value)}
                      required
                   
                      />
    
                   <br></br>
                   <button type="submit">Submit</button>
                   </form>
                   </div>
               
        </ModalBody>
        </Modal>
         
          {/* <table>

            
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
                
                   

                 
          data.map((data,index)=>{
               return<tr key={index}>
                
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.loginTime}</td>
                    <td>{data.loginDate}</td>
                    <td>{data.logoutTime}</td>
                    <td>{data.logoutDate}</td>
                    
                </tr>
                   })
                   }  

                
                
                
              
                
            
          </table> */}

<br/>
<br/>

<h2>Available Book Detail</h2>

           <table>
               
                 <thead>
                        <tr>
                          <th> bookId</th>
                          <th>bookName</th>
                          <th>authorName</th>
                          <th>bookpages</th>
                          <th>bookPice</th>
                          <th>publisherName</th>
                          <th>publishDate</th>
                          <th>availableBook</th>
                          <th>UpdateBook</th>
                          <th>DeleteBook</th>
                       </tr>
                 </thead>

                 <tbody>
                    {
                     data.map((book)=>{
                        return <tr id={book.bookId}>
                             <td>{book.bookId}</td> 
                             <td>{book.bookName}</td> 
                             <td>{book.authorName}</td> 
                             <td>{book.bookPages}</td> 
                             <td>{book.bookPrice}</td>
                             <td>{book.publisherName}</td> 
                             <td>{book.publishDate}</td> 
                             <td>{book.availableBook}</td>
                             {/* <Button color="danger" onClick={toggle}>
                                Update Book
                             </Button> */}
                             {/* <button onClick={toggle}/> */}
                            <td><button id="btn12"  onClick={(e)=>updateRow(book.bookId,e)}>update</button></td> 
                             <td><button id={book.bookId} className='btn2' onClick={(e)=>deleteRow(book.bookId,e)}>Delete</button></td>
                            
                        </tr>
                     })
                    }
                        
                 </tbody>
           </table>
            <br/>
            <br/>
          
          
          <div>
          <h1>Issued Book Detail</h1>


              
           <table>
               
               <thead>
                      <tr>
                        <th>Book ID</th>
                        <th>bookName</th>
                        <th>bookPice</th>
                        <th>Book Issue Date</th>
                        <th>Isssue for Days</th>
                        <th>Number of Book isssued</th>
                        <th>UserId</th>
                        <th>UserName</th>
                        <th>User Email</th>
                     </tr>
               </thead>

               <tbody>
                  {
                   issuebookData.map((book)=>{
                      return <tr id={book.bookId}>
                           <td>{book.id}</td> 
                           <td>{book.bookName}</td>
                           <td>{book.totalBookPrice}</td>  
                           <td>{book.issueDate}</td> 
                           <td>{book.numberofDays}</td>
                           <td>{book.numberofbookissued}</td>
                           <td>{book.userId}</td> 
                           <td>{book.userName}</td> 
                           <td>{book.userEmail}</td>
                           {/* <Button color="danger" onClick={toggle}>
                              Update Book
                           </Button> */}
                           {/* <button onClick={toggle}/> */}
                          {/* <td><button id="btn12"  onClick={(e)=>updateRow(book.bookId,e)}>update</button></td> 
                           <td><button id={book.bookId} className='btn2' onClick={(e)=>deleteRow(book.bookId,e)}>Delete</button></td> */}
                          
                      </tr>
                   })
                  }
                      
               </tbody>
         </table>



          </div>
          
             
          
        
       </div>
       
  );
}

export default Dashboard;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
