import react from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
function Nav(){
    return(
        <header className="header">
                <a href="/Home" className="logo">SAcademy.</a>
                <nav className="navbar">
                <a className="active" href="./home.html">Home</a>
                <a href="./dishes.html">dishes</a>
                <a href="#">about</a>
                <a href="#">Contact us</a>
                <a href="#">Orders</a>
            </nav>
            <div className="icons">
            <a href="#" className="login"><AiOutlineLogin /></a>
            
        </div>
        
    </header>
    );
}
export default Nav;