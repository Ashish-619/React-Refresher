import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Github = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/ashish-619`)
            .then(res => res.json())
            .then(data => {
                console.log("Data is:", data)
                setData(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className='text-center m-4 bg-gray-400 p-4 text-3xl'>Github Profile
                <h4>Name: {data.name}</h4>
                <h4>Location: {data.location}</h4>
                <h4>Public Repo's: {data.public_repos}</h4>
                <div className='flex justify-center'><img src={data.avatar_url} alt="profile pic" width={200} /></div>
            </div>
        </>
    )
}

export default Github