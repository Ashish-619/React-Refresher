import React, { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <>
            <h2>Login</h2>
            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setusername(e.target.value)} />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login