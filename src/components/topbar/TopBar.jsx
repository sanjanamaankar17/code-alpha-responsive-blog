import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user = true;
  return (
      <div className='top'>
      <div className="topleft">
        <i className=" topIcon fa-solid fa-rainbow"></i>
        <p className="topText">RainBow</p>
        </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplistItem"><Link className="link" to="/" >HOME</Link></li>
          <li className="toplistItem"><Link className="link" to="/settings">SETTINGS</Link></li>
          
          <li className="toplistItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="toplistItem"><Link className="link" to="/logout">{user && "LOGOUT"}</Link></li>
        </ul>
        </div>
      <div className="topright">
        {
          user ? (
            <img className="topImg" src="https://img.freepik.com/premium-photo/illustration-cute-girl-avatar-graphic-white-background-created-with-generative-ai-technology_67092-5041.jpg?size=626&ext=jpg&ga=GA1.1.510253636.1690194160&semt=ais" alt="" />
          ) : (
              <ul className="toplist">
                <li className="toplistItem"><Link className="link" to="/login">LOGIN</Link></li>
                <li className="toplistItem"><Link className="link" to="/register">REGISTER</Link></li>
              </ul>
          )
        }
        
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
//<!--li className="toplistItem"><Link className="link" to="/contact">CONTACT</Link></li-->