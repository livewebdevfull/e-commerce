import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login"><br/><br/><br/><br/><br/>
            <div className="login-page">
                <form onSubmit={loginSubmit}>
                    <h2>Login</h2><br/><br/>
                    <span>Username</span><input type="email" name="email" required
                    placeholder="Type your username" value={user.email} onChange={onChangeInput} />

                    <span>Password</span><input type="password" name="password" required autoComplete="on"
                    placeholder="Type your password" value={user.password} onChange={onChangeInput} />

                    <div className="rows">
                        <button type="submit">Login</button><br/>
                        <span class="user">Not an existing user? &nbsp; <Link to="/register">Register</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
