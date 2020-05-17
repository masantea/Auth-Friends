import React, {useState, useEffect, useParams} from 'react';
import AxiosWithAuth from './AxiosWithAuth';

const Friend = (props) => {

    const [ friend, setFriend ] = useState({})
    console.log(props)
    // props = history, location, match
    // match => params = {id:1} /protected/:id

    // props.match.params.id

    // const params = useParams()// returns an object with whatever values are inside props.match.params
    // params = {id} <== this is the object returned by useParams
    // params.id
     const { id } = useParams() // we don't have do params.id because we are directly pulling out the id from the object returned by useParams

    useEffect(() => {

        AxiosWithAuth()
            .get(`http://localhost:5000/api/friends/${id}`)
            .then(res => setFriend(res.data))
            .catch(err => console.log(err.message))
    }, [])

    return(

        <div>
            <h1>{friend.name || "no name"}</h1>
            <p>{friend.age || 'no age'}</p>
            <p>{friend.email || 'no email'}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Friend;