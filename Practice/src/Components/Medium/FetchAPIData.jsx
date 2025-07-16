import React, { useEffect, useState } from 'react'

const FetchAPIData = () => {
    const [users, setUsers] = useState([]);
    const api = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        fetch(api).then((res) => {
            return res.json();
        }).then((resData) => {
            setUsers(resData);
        })
    }, [])

    // console.log(users);
  return (
    <>
        <h4>List of Users</h4>
        <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name}
            </li>
        ))}
        </ul>
    </>
  )
}

export default FetchAPIData