import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const {dispatch}  = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
        

        const action  = { 
          type: types.login,
          payload: {
            name:'Samuel Casallas'
          }
        }
        dispatch(action);

        navigate('/marvel',{
          replace: true
        })
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <button className="btn btn-primary"
      
      onClick={handleLogin}>Login</button>
    </div>
  );
};
