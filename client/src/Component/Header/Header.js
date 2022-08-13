
import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
     <header className="header">
  {/* <h1 class="animate_animated animate_bounce">An animated element</h1> */}
  {/* <i class="fa-solid fa-hand-holding-droplet" style="font-size: 50px;"></i> */}
  <a
    href="#"
    className="logo animate_animated animate_bounce "
    style={{ color: "red", textDecoration: "underline" }}
  >
    <i
      className="fa-solid fa-hand-holding-droplet me-3"
      style={{ fontSize: 40 }}
    />
    <span>BloodBank</span>Life
  </a>
  {/* <i class="fa-solid fa-hand-holding-droplet"></i> */}
  {/* <a href="">  <img src="pic2.png" alt="" width="10%"></a> */}
  <nav className="navbar">
    {/* <img src="blood.jpg" alt="" width="115px"> */}
    <a href="/">HOME</a>
    <a href="/Bloodbank" target="_blank">
      Blood Bank
    </a>
    <a href="/Bloodrequest" target="_blank">
      Request Blood
    </a>
    <a href="/Findblooddonor" target="_blank">
      Find Blood Donor
    </a>
    <a href="/About" target="_blank">
      About
    </a>
    <a href="/Donateus" target="_blank">
      DONATE US
    </a>
    <a href="/Contactus" target="_blank">
      Contact Us
    </a>
    <a href="/News" target="_blank">
      News
    </a>
  </nav>
  <div id="menu-bars" className="fas fa-bars" />
</header>

    
   
    </div>
    
  );
}
