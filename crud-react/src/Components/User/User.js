import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { Link } from 'react-router-dom'

const User = () => {
    const { search } = useLocation()
    const { id } = queryString.parse(search)

    const [user, setUser] = useState('');

    const getUserData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        const data = await res.json()
        console.log(data)
        setUser(data.username)
    }

    useEffect(() => {
        getUserData();
    }, [])

    return <div className='w-full h-screen bg-red-400 text-white flex justify-center items-center flex-col'>
        <h1 className='text-5xl'>{user}</h1>
        <Link to={`/post/?id=${id}`}>
            <h1 className='text-3xl m-5'>posts</h1>
        </Link>
        <Link to={`/to-do/?id=${id}`}>
            <h1 className='text-3xl m-3'>to do</h1>
        </Link>
        <Link to={`/post/?id=${id}`}>
            <h1 className='text-3xl m-3'>album</h1>
        </Link>

    </div>
}

export default User