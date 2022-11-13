import axios from 'axios';
import React, {useState, useEffect} from 'react'

const UsersEffect = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log('res', res);
            setUsers(res.data);
        })
    }, []);
    return (
        <div>
            <ul>
            {
                users.length && users.map((user, index) => {
                    return <li key={index}>{user.name}</li>
                })
            }   
            </ul>
        </div>
    )
}

export default UsersEffect