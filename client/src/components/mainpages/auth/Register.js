import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login"><br/><br/><br/><br/><br/>
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2>Register</h2><br/><br/>
                <span>Name</span><input type="text" name="name" required
                placeholder="Type your name" value={user.name} onChange={onChangeInput} />

                <span>Email</span><input type="email" name="email" required
                placeholder="Type your email" value={user.email} onChange={onChangeInput} />

                <span>Password</span><input type="password" name="password" required autoComplete="on"
                placeholder="Create a new password" value={user.password} onChange={onChangeInput} />

                <div className="rows">
                    <button type="submit">Register</button>
                    <span class="user">Already an existing user? &nbsp; <Link to="/login">Login</Link> </span>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Register