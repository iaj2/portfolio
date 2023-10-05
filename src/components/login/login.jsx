import './login.scss'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase-config'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const authenticated = localStorage.getItem("authenticated")
        if(authenticated) {
          navigate('/admin')
        }
      }, [navigate])
    
    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('Logged in! Redirecting to admin page.')
                localStorage.setItem("authenticated", true)
                navigate('/admin')
                
            })
            .catch((error) => {
                alert('Failed to Login :(')
    })
    }

    return (
        <div className='login-page'>
            <form className='login-form' onSubmit={handleLogin}>
                <div className='email-wrapper'>
                    <label for='email'>Email</label>
                    <input id='email' type='email' onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className='password-wrapper'>
                    <label for='password'>Password</label>
                    <input id='password' type='password' onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                <div className='button-wrapper'>
                    <button type='submit' className='login-button' value="Submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login