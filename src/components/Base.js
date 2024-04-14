
import { Children } from "react";
import Nav from "../Nav";
import Home from "../Home";
import About from "../About";

function Base({title="welcome tomy website", children}) {
    return (
      <div className="container1">
         <Nav/>

          {
            children
          }
         
      </div>
    );
  }
  
  export default Base;
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<App />);
  