import {Outlet} from "react-router-dom";
import { isLogin } from "../Auth";

function PrivateRoute(){

          if(isLogin()){
               return <Outlet/>
          }
}
export default PrivateRoute;