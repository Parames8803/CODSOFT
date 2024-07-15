import { Link, Outlet, useNavigate  } from "react-router-dom";
import {useState} from "react"
import Axios from 'axios'
import '../styles/signup.css'

const Signup = () => {

    const navigate = useNavigate();

    const path = 'http://localhost:5000'

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signup, setSignup] = useState('')


    Axios.defaults.withCredentials = true

    const btnsignup = async (e) => {
        e.preventDefault()

        if((username === '') || (email === '') || (password === '')){
            setSignup('Please enter the details..')
        }else{
            const res = await Axios.post(path+ '/api/signup', {
                username : username,
                email : email,
                password : password
            }).then((response) => {
                console.log(response)
            })
    
            navigate('/login');
        }
    }





    return (
        <>
        <div className="container">
        <h1>Signup</h1>
        <form className="signup-frm">
        <label htmlFor="username">UserName : </label>
            <input type="text" name="username"  onChange={(e) => {setUsername(e.target.value)}} placeholder="Username here"/><br/>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email"  onChange={(e) => {setEmail(e.target.value)}} placeholder="Email here"/><br/>
            <label htmlFor="password">Password : </label>
            <input type="password" name="password"  onChange={(e) => {setPassword(e.target.value)}} placeholder="Password here"/>
            <button type="submit" onClick={btnsignup}>Signup</button>
            <Link to="/login">Already have an account ?</Link>
            <p>{signup}</p>
        </form>
        </div>

        <Outlet/>
        </>
    )
}


export default Signup;