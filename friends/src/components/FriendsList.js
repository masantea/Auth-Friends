import React from "react";
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AxiosWithAuth from "./AxiosWithAuth";
import FriendForm from './FriendForm'


const FriendsList = () => {
 
  const [friendsList, setFriendsList] = useState();

  useEffect(() => {

    AxiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err.message))
  }, [])

  const Delete = () => {


  }

    return (
      <div>
         <FriendForm setFriendsList = {setFriendsList}/> 
        {friendsList && friendsList.map(friend => (
          <Link to={`/friends/${friend.id}`}>
            <h1 key={friend.id} >{friend.name}</h1>
          </Link>
        )) }
      </div>
  
    );
  
}

export default FriendsList;
