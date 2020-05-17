import React from "react";
import {useState, useEffect} from 'react';
import AxiosWithAuth from "./AxiosWithAuth";


const FriendsList = () => {
 
  const [friendsList, setFriendsList] = useState();

  useEffect(() => {

    AxiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(res => setFriendsList(res.data))
      .catch(err => console.log(err.message))
  }, [])

    return (
      <div>
        {friendsList && friendsList.map(friend => <h1 key={friend.id} >{friend.name}</h1>) }
      </div>
      
    );
  
}

export default FriendsList;
