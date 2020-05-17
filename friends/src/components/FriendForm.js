import React, {useState} from 'react';
import AxiosWithAuth from './AxiosWithAuth';


const FriendForm = (props) => {


  const [name, setFriendName] = useState('')
  const [age, setFriendAge] = useState('')
  const [email, setFriendEmail] = useState('')

  const Submit =(e) => {

    e.preventDefault()

    AxiosWithAuth()
      .post('http://localhost:5000/api/friends', {name, age, email})
      .then (res => props.setFriendsList(res.data))
      .catch (err => console.log (err.message))

  }

return (

  <form onSubmit={Submit}>
    <input type = 'text' name= 'Name' placeholder = 'name'  onChange={(e) => setFriendName(e.target.value)} />;
    <input type = 'text' name= 'age' placeholder = 'Age' onChange={(e) => setFriendAge(e.target.value)}/> ; 
    <input type = 'text' name= 'email' placeholder = 'Email' onChange={(e) => setFriendEmail(e.target.value)}/>;
    <button> Submit</button> ;
  </form>
)
}

export default FriendForm; 