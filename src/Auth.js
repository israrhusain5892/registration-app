 
 
 export function isLogin(){
      const user=localStorage.getItem("data");
      if(user!=null){
        return true;
      }
      return false;
}

export function doLogin(data){
     localStorage.setItem("data",JSON.stringify(data));
     
}

export  function doLogout(next){
      localStorage.removeItem("data");
      next();
}

export function getCurrentUserDetail(){
     if(isLogin()){
        return JSON.parse(localStorage.getItem("data"));
     }
     else{
        return undefined;
     }
}


