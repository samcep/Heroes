import React,{useContext} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {

   const {user,dispatch} = useContext(AuthContext);
   const navigate = useNavigate();
  //Todo: por hacer
  const handleLogout = () => {
    const action  = {
      type:types.logout,
      payload: {
        name:''
      }
    }
    dispatch(action)
    navigate('/login',{
      replace: true
    });
    
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <Link className="nav-item nav-link"
          
            to="/marvel"
          >
            Marvel
          </Link>

          <Link
           
            to="/dc"
            className="nav-item nav-link"
          >
            DC
          </Link>

          <Link
           
           to="/search"
           className="nav-item nav-link"
         >
           Search
         </Link>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2  d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button  className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
