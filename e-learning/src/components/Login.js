import react from 'react';
import './css/Login.css';
import login from './Mobile-login-Cristina.jpg';

function Login(){
    
    return(
        <>
        <div className="background">
            <header className="container">
                <img src={login} width="55%" alt="login"/>
                <div className="FormContainer">
                    <form>
                    <div className="form">
                        <h1>Login</h1>
                        <br></br>
                        <label>
                            Email:<input type="email" name="username" placeholder="Enter Email"></input>
                        </label>
                        <label>
                            Password:<input type="password" name="password" placeholder="Enter Password"></input>
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