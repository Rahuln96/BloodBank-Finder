import React from 'react'
import {Link} from 'react-router-dom'

export default function Portfolio() {
  return (
    <div>
     <div className="container-fluid bg1">
  <h1>Blood Bank Locations</h1>
  <p>Find Your Blood Bank Near By You.</p>
</div>

<div className="map">
  {/* <h1 style="color:black ;"><i>Map</i></h1> */}
  <iframe
    src="https://www.google.com/maps/d/embed?mid=1nuWQEYS-cVvtzMXKUO8HZ2wcuNfTes0&ehbc=2E312F"
    width="100%"
    height={600}
  />
</div>
<div className="container-fluid bg2">
  <h1>QUESTIONS ?</h1>
  <p>We're online! Chat With Us.. --&gt;</p>
</div>






    </div>
  )
}
