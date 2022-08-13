import React from 'react'

export default function Contact() {
  return (
    <>
    <section id="section-wrapper">
  <div className="box-wrapper">
    <div className="info-wrap">
      <h2 className="info-title">Contact Infornmation</h2>
      <h3 className="info-sub-title">
        Fill up the form and our team will get back to you within few hours
      </h3>
      <ul className="info-details">
        <li>
          <i className="fas fa-phone-alt" />
          <span>Phone: </span> <a herf="tel:+9608550065">9608550065</a>
        </li>
        <li>
          <i className="fas fa-paper-plane" />
          <span>Email: </span> <a herf="shri16@gmail.com">shri16@gmail.com</a>
        </li>
        <li>
          <i className="fas fa-globe" />
          <span>Website: </span>{" "}
          <a herf="https://yoursite.com">https://yoursite.com </a>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <a herf="#">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a herf="#">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a herf="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </li>
      </ul>
    </div>
    <div className="form-wrap">
      <form action="#" method="POST">
        <h2 className="form-title">Send us a message</h2>
        <div className="form-fields">
          <div className="form-group">
            <input type="text" className="fname" placeholder="First Name" />
          </div>
          <div className="form-group">
            <input type="text" className="lname" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="email" className="email" placeholder="Mail" />
          </div>
          <div className="form-group">
            <input type="number" className="phone" placeholder="phone" />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              placeholder="Write Your Message"
              rows={4}
              required=""
              defaultValue={""}
            />
          </div>
        </div>
        <input
          type="submit"
          defaultValue="Send Message"
          className="submit-button"
        />
      </form>
    </div>
  </div>
</section>

    </>
  )
}
