import React,{useState} from 'react'

function Login() {
  const defaultUser = {username:"", password:""};
  const [user,setUser] = useState(defaultUser);
  const handleChange = (event) => {
     setUser({...user, [event.target.name]: event.target.value});     
  }
  const handleSubmit = (event) => {
     event.preventDefault();

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={user.username} placeholder="Enter Username" />
        <input type="text" onChange={handleChange} value={user.password} placeholder="Enter Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

export default Login
