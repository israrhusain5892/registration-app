import axios from "axios";

export const userData= async (data1)=>{
   const res=  await fetch(`http://localhost:8088/login`,{
    method:'PUT',
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify(data1),
})
    // 
    return res;
    
}

// export const getPost = async (funcParamURL) => {
//   return  await fetch(`${funcParamURL}`,{
//     headers: {
//       "Accept": '*/, application/json',
//     }
//   });
// }