import React from 'react'

export default function Bloodrequest() {
  return (
    <div>
      <div className="container">
  <h2>
    Request For Blood
    <hr />
  </h2>
  <h3>Patient Details</h3>
  <form action="#">
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>Patient Name</h4>
        <input
          type="text"
          placeholder="Patient Name"
          required=""
          className="name"
        />
      </div>
      <br />
      <div className="input-box">
        <h4>Doctor Name</h4>
        <input
          type="text"
          placeholder="Doctor Name"
          required=""
          className="name"
        />
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>Blood Group</h4>
        <select className="blood group">
          <option>--Blood Group--</option>
          <option>A+</option>
          <option>O+</option>
          <option>B+</option>
          <option>AB+</option>
          <option>A-</option>
          <option>O-</option>
          <option>B-</option>
          <option>AB-</option>
        </select>
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>State</h4>
        <select className="state">
          <option>Select State</option>
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chhattisgarh</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Haryana</option>
          <option>Himachal Pradesh</option>
          <option>Jharkhand</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Madhya Pradesh</option>
          <option>Maharashtra</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Odisha</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Tamil Nadu</option>
          <option>Telangana</option>
          <option>Tripura</option>
          <option>Uttar Pradesh</option>
          <option>Uttarakhand</option>
          <option>West Bengal</option>
        </select>
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>District</h4>
        <select className="District">
          <option>Select District</option>
          <option>Arwal</option>
          <option>Aurangabad</option>
          <option>Gaya</option>
          <option>Patna</option>
          <option>Bhagalpur</option>
          <option>Begusarai</option>
          <option>vaishali</option>
          <option>Nawada</option>
          <option>Muzzafarpur</option>
          <option>Indore</option>
          <option>Nashik</option>
          <option>Ajmer</option>
          <option>Jodhpur</option>
          <option>Dehradun</option>
        </select>
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>Tehasil</h4>
        <select className="Tehasil">
          <option>Select Tehasil</option>
          <option>Bihta</option>
          <option>Dananpur</option>
          <option>Bikram</option>
          <option>Ahmedabad</option>
          <option>Amreli</option>
          <option>Anand</option>
          <option>Angara</option>
          <option>Bandra</option>
        </select>
      </div>
    </div>
    <br />
    <h3>Contact Details</h3>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>Contact Name</h4>
        <input
          type="text"
          placeholder="Contact Name"
          required=""
          className="name"
        />
      </div>
      <br />
      <div className="input-box">
        <h4>Mobile No</h4>
        <input
          type="mobile"
          placeholder="Mobile no."
          required=""
          className="name"
        />
      </div>
      <br />
      <div className="input-box">
        <h4>Date when Need</h4>
        <input type="text" placeholder="" required="" className="name" />
      </div>
      <br />
      <div className="input-box">
        <h4>Priority</h4>
        <select className="priority">
          <option>--priority type--</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>Email</h4>
        <input
          type="email"
          placeholder="Email Address"
          required=""
          className="name"
        />
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <h4>Other Message</h4>
        <input type="text" placeholder="" required="" className="name" />
      </div>
    </div>
    <br />
    <div className="input-group">
      <div className="input-box">
        <button type="submit">SEND REQUEST</button>
      </div>
    </div>
    <br />
  </form>
</div>

    </div>
  )
}
