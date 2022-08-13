import React from 'react'

export default function About() {
  return (
    <div>
    <div className="container-fluid bg1">
  <h1>ABOUT US</h1>
  <p>
    EVERY BLOOD DONAR IS A LIFE SAVER
    <br /> Donating blood not only saves the life also save donor's lifes.
  </p>
</div>
<div className="bg2">
  <h2 className="text-danger">BLOOD BANK LIFE</h2>
  <p>
    Blood Bank life is designed to store, process, retrieve and analyze
    information concerned with the administrative and inventory management
    within a blood bank. This project aims at maintaining all the information
    pertaining to blood donors, different blood groups available in each blood
    bank and help them manage in a better way. Most blood donors are volunteers.
    However, sometimes, a patient may want to donate blood a couple of weeks
    before undergoing surgery, so that his or her blood is available in case of
    a blood transfusion. Donating blood for yourself is called an autologous
    donation.
  </p>
</div>


<div className="container">
  <div className="row">
    <div className="col-6">
      <h2 className="text">
        Volunteer blood donors must pass certain criteria, including the
        following:
      </h2>
      <ol type="a">
        <li>
          {" "}
          Must be at least 16 years of age, or in accordance with state law{" "}
        </li>
        <li> Must be in good health </li>
        <li> Must weigh at least 110 pounds</li>
        <li>
          {" "}
          Must pass the physical and health history exam given before donation{" "}
        </li>
        <li>
          {" "}
          Some states permit people younger than 16 or 17 years to donate blood,
          with parental consent.
        </li>
        <ol></ol>
      </ol>
    </div>
    <div className="col-6 img">
      <img src="a.jpg" alt="" />
    </div>
  </div>
  <div className="row">
    <div className="col-md-3">
      <h6>Benefits of blood donation:-</h6>
      <iframe
        width={200}
        height={100}
        src="https://www.youtube.com/embed/AT_5pNNj-sk"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
    <div className="col-md-3">
      <h6>why blood donation?</h6>
      <iframe
        width={200}
        height={100}
        src="https://www.youtube.com/embed/yFGSmxI8Yjc"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      />
    </div>
  </div>
</div>

    </div>
  )
}
