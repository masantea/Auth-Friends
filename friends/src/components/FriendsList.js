import React from "react";
import {useState, useEffect} from 'react';
import axios from "axios";


const FriendsList = () => {
 
  const [friendsList, setFriendsList] = useState();

  useEffect(() => {

    axios
      .get('http://localhost:5000/api/friends')
      .then(res => console.log(res))
      .catch(err => console.log(err.message))
  }, [])

    return (
      <div>
        
      </div>
      
    );
  
}

export default FriendsList;
