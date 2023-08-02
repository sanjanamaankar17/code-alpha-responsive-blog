import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className='sidebarImg' src='https://img.freepik.com/free-vector/pride-day-lettering-concept_23-2148524295.jpg?size=626&ext=jpg&ga=GA1.2.510253636.1690194160&semt=ais' alt=''></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi dolores enim natus fugiat, eaque cum quisquam perspiciatis neque quidem aperiam voluptas.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}
