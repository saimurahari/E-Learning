import react from 'react';
import './css/Login.css';
import login from './Mobile-login-Cristina.jpg';
import { useState } from 'react';
function Login(){
    const[inputs, setInputs] = useState({});

    const hanldeChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}))

    }
    const handleSubmit=(event)=>{
        event.preventDefault(); 
        console.log(inputs);

    }
    return(
        <>
        <div className="background">
            <header className="container">
                <img src={login} width="55%" alt="login"/>
                <div className="FormContainer">
                    <form onSubmit={handleSubmit}>
                    <div className="form">
                        <h1>Login</h1>
                        <br></br>
                        <label>
                            Email:<input type="email" name="username" value={inputs.username||""} onChange={hanldeChange} placeholder="Enter Email"></input>
                        </label>
                        <label>
                            Password:<input type="password" name="password"  value={inputs.password||""} onChange={hanldeChange} placeholder="Enter Password"></input>
                        </label>
                        <br></br>
                        <center><input type="submit" value="Login"></input></center>
                        <center><a href="#">Forgot Password? | </a><a href="#">Singup?</a></center>
                    </div>
                    </form>
                </div>
            </header>
        </div>
       
        </>

    );
}
export default Login;