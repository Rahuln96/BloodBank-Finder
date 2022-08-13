// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
export default function Home() {
  return (
    <React.Fragment>
    <div>
    <section
  className="row text-white pb-5 gx-0 gy-3 justify-content-evenly animate__animated animate__heartBeat animate__delay-2s"
  id="banner-1"
>
  {/* <div class="s3d1 col-lg-3 col-md-6" style="border: 2px solid rgb(243, 57, 10); background-color: rgb(228, 142, 36, 0.6); padding: 10px;"> */}
  <div id="marquee">
    <p>
      {" "}
      This National Portal is dedicated to information on Blood Transfusion
      Services and Resources.{" "}
    </p>
  </div>
  <div className="main">
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-mdb-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./scrooler/pic1.jpg"
            className="d-block w-100 h-50"
            alt="Wild Landscape"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./../img/scrooler/pic5.jpg"
            className="d-block w-100"
            alt="Camera"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./../img/pic2.jpg"
            className="d-block w-100"
            alt="Exotic Fruits"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleCaptions"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div className="s3d1 col-lg-2 col-md-6 ">
    <a href="/Login" target="_blank">
      <img className="img3 mb-4 round1" src="./../img/round.webp" alt="" />
    </a>
  </div>
  <div className="s3d1 col-lg-2 col-md-6 ">
    <a href="/Bloodrequest" target="_blank">
      <img className="img3 mb-4 round1" src="./../img/round3.jpg" alt="" />
    </a>
  </div>
</section>



<div className=" conatiner-fluid row justify-content-center" id="section-2">
  <div className=" col-lg-2 col-md-5 col-sm-5 mb-5">
    <img
      className="mb-4 s2-icons"
      src=" https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-8a0caeed--Lifeline-18.png?v=1604478986"
      alt=""
    />
    <h3 className="mb-3 text-center">Medication</h3>
    <p className="text-center">
      Find out how your medicine works, how and when to take it
    </p>
  </div>
  <div className=" col-lg-2 col-md-5 col-sm-5 pt-2 mb-5">
    <img
      className="mb-4 s2-icons"
      src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-0caeed4d--Lifeline-21.png?v=1604479002"
      alt=""
    />
    <h3 className="mb-3 text-center">Heart Defect</h3>
    <p className="text-center">
      Highly skilled experts and consultants in heart diseases
    </p>
  </div>
  <div className=" col-lg-3 col-md-5 col-sm-5 mb-5">
    <img
      className="mb-4 s2-icons"
      src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pfaeed4d33lifeline17-1652170740373.webp?v=1652170741"
      alt=""
    />
    <h3 className="mb-3 text-center">Live Support 24/7</h3>
    <p className="text-center">
      Live support to assist you, especially in emergency
    </p>
  </div>
  <div className=" col-lg-2 col-md-5 col-sm-5 mb-5">
    <img
      className="mb-4 s2-icons"
      src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pfed4d333alifeline19-1652170782189.webp?v=1652170783"
      alt=""
    />
    <h3 className="mb-3 text-center">First Aid</h3>
    <p className="text-center">
      Advice, tips and tools to help you save people's life
    </p>
  </div>
</div>




<>
  <div
    className=" container-fluid row justify-content-center gy-0"
    id="section-3"
  >
    <div className="col-lg-4 col-md-5" id="s3-img" />
    <div className="col-lg-4 col-md-5 ms-4" id="s3d2">
      <h1>Why should donate blood?</h1>
      <p>
        {" "}
        Our nation requires 4 Crore Units of Blood while only 40 lakh units are
        available, Every two seconds someone needs Blood There is no substitute
        for Human Blood. It cannot be manufactured Blood donation is an
        extremely noble deed, yet there is a scarcity of regular donors across
        India. We focus on creating &amp; expanding a virtual army of blood
        donating volunteers who could be searched and contacted by family/care
        givers of a{" "}
      </p>
      <a href="about.html" target="_blank">
        <button type="submit" id="button-s3">
          {" "}
          ABOUT US !
        </button>
      </a>
    </div>
    <a href="about.html" target="_blank"></a>
  </div>
  <a href="about.html" target="_blank"></a>
</>



<div
  className=" container-fluid row justify-content-center gy-5"
  id="section-4"
>
  <div className="col-lg-6">
    <div className="card1">
      <h1 style={{ textDecoration: "solid" }}>Donation</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde
        culpa nihil similique expedita est? Dolorem dolore modi saepe beatae
        nisi cumque aliquid animi consequuntur iste totam culpa, ratione
        corporis!
      </h2>
      <a href="donate.html" target="_blank">
        <button type="button" className="btn btn-outline-warning">
          DONATE US
        </button>
      </a>
    </div>
  </div>
  <div className="col-lg-6">
    <div className="card1">
      <h1 style={{ textDecoration: "solid" }}>Donation Process</h1>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt unde
        culpa nihil similique expedita est? Dolorem dolore modi saepe beatae
        nisi cumque aliquid animi consequuntur iste totam culpa, ratione
        corporis!
      </h2>
      <a href="process.html" target="_blank">
        <button type="button" className="btn btn-outline-warning">
          DONATION PROCESS
        </button>
      </a>
    </div>
  </div>
</div>


<div
  className=" container-fluid row justify-content-center gy-5"
  id="section-5"
>
  <div className="col-lg-12">
    <h1 className="text-center">OUR TEAM</h1>
  </div>
  <div className="col-lg-3 col-xl-2 col-md-5 text-center s5-img">
    <img
      src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-333a5584--Lifeline-25.png?v=1604479135"
      alt=""
    />
    <h3>Andrew Harris</h3>
    <p>Doctor - 4-year experience</p>
  </div>
  <div className="col-lg-3 col-xl-2 col-md-5 text-center s5-img">
    <img
      src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-3a55840b--Lifeline-27.png?v=1604479150"
      alt=""
    />
    <h3>Christine White</h3>
    <p>Nurse - 3-year experience</p>
  </div>
  <div className="col-lg-3 col-xl-2 col-md-5 text-center s5-img">
    <img
      src="https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-55840b24--Lifeline-29.png?v=1604479166"
      alt=""
    />
    <h3>Lydia Braginsky</h3>
    <p>Doctor - 2-year experience</p>
  </div>
  <div className="col-lg-3 col-xl-2 col-md-5 text-center s5-img">
    <img
      src=" https://cdn.shopify.com/s/files/1/2170/1117/t/10/assets/pf-840b2449--Lifeline-26.png?v=1604479185"
      alt=""
    />
    <h3>Jonathan Samson</h3>
    <p>Nurse - 3-year experience</p>
  </div>
</div>



<div class="row container-fluid" id="section-6">
        <div class="col-lg-12 mt-5">
            <h1 class="text-center">TESTIMONIALS</h1>
        </div>

        <div class="col-lg-7 col-md-7 col-sm-7 col-8" id="s6d2">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <a href="#">
                        <div class="carousel-item active" id="slider-1" />
                            <img class="slider-img1" src="./../img/hover.png" alt="" />
                    </a>
                    <p class="pb-5 text-center text-dark fw-bold">BE A DONOR</p>
                </div>
                <div class="carousel-item">
                    <a href="#">
                        <img class="slider-img1" src="./../img/hover2.jpg" alt="" />
                    </a>
                    <p class="pb-5 text-center text-dark fw-bold">REGISTERS</p>
                </div>
                <div class="carousel-item">
                    <a href="#">
                        <img class="slider-img1" src="./../img/hover3.jpg" alt="" />
                    </a>
                    <p class="pb-5 text-center text-dark fw-bold ">BLOOD BANKS</p>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div className=" container-fluid row justify-content-center" id="section-7">
  <div className="col-lg-4 col-md-5" id="s7-img" />
  <div className="col-lg-4 col-md-5 ms-4" id="s7d2">
    {/* <h1>CONTACT US</h1>
      <div class="row justify-content-center">
          <form action="" class="row">
              <!-- <input class="col-lg-12 col-md-12 col-sm-10 form-control mb-4" type="text" placeholder="Your Name"
                  required>
              <input class="col-lg-6 col-md-6 col-sm-5 form-control me-4 mb-4" style="width: 45%;" type="email"
                  placeholder="E-mail" required>
              <input class="col-lg-6 col-md-6 col-sm-5 form-control mb-4" style="width: 50%;" type="tel"
                  placeholder="Number">
              <br>
              <input class="col-lg-12 col-md-12 col-sm-10 form-control mb-3 pb-5" type="text"
                  placeholder="Your Request" required> */}
    {/* <button class="col-lg-4" type="submit"> CONTACT US</button> */} --&gt;
  </div>
</div>

    </div>
    </React.Fragment>
  )
}
