import React, {useState} from 'react'

function CreateFriendForm() {
  const defaultNewUser = { name: '',  age: '', email: '' }
  const [newUser, setNewUser] = useState(defaultNewUser);
  const handleChange = (event) => {
      setNewUser({...newUser, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
     event.preventDefault();
     if(!newUser.name && !newUser.age && !newUser.email) return;
     setNewUser(defaultNewUser);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} name="name" value={newUser.name} placeholder="name" />
        <input type="text" onChange={handleChange} name="age" value={newUser.age} placeholder="age" />
        <input type="text" onChange={handleChange} name="email" value={newUser.email} placeholder="email" />
        <button type="submit">Add New Friend</button>
      </form>
    </div>
  )
}

export default CreateFriendForm
