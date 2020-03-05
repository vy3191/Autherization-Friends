import React,{useState} from 'react';
import  {connect} from 'react-redux';
import { getLogingDetails } from '../../actions/LoginActions';


function Login(props) {
  const defaultUser = {username:"", password:""};
  const [user,setUser] = useState(defaultUser);
  const handleChange = (event) => {
     setUser({...user, [event.target.name]: event.target.value});     
  }
  const handleSubmit = (event) => {
     event.preventDefault();
     if(!user.username && !user.password) return;
     props.getLogingDetails(props,user);     
     setUser(defaultUser);
     
  }
  return (
    <div className="form-login">
      <form onSubmit={handleSubmit} className="wpforms-form">
        <input type="text" onChange={handleChange} name="username" value={user.username} placeholder="Enter Username" />
        <input type="text" onChange={handleChange} name="password" value={user.password} placeholder="Enter Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}
const mapDispatchToState = {
  getLogingDetails
}
export default connect(null, mapDispatchToState)(Login);
