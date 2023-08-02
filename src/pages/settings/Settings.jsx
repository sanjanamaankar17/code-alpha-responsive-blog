import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
      <div className='settings'>
          <div className="settingsWrapper">
              <div className="settingsTitle">
                  <span className="settingsUpdateTitle">Update Your Account</span>
                  <span className="settingsDeleteTitle">Delete Account</span>
              </div>
              <form className="settingsForm">
                  <label>Profile Picture</label>
                  <div className="settingsPP">
                      <img src="https://img.freepik.com/free-photo/people-white-clothes-stand-rock-by-sea-dusk-looking-into-distance-illustration_456031-16.jpg?size=626&ext=jpg&ga=GA1.2.510253636.1690194160&semt=sph" alt="" />
                      <label htmlFor="fileInput">
                      <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                      </label>
                      <input type="file" id='fileInput' style={{display:'none'}}/>
                  </div>
                  <label>UserName</label>
                  <input type="text" placeholder='valid username' />
                  <label>Email</label>
                  <input type="text" placeholder='email@gmail.com' />
                  <label>Password</label>
                  <input type="password" />
                  <button className="settingsSubmit">Update</button>
              </form>
          </div>
          <Sidebar/>
      </div>
  )
}
