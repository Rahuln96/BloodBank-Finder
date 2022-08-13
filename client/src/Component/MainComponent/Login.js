import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

  const navigate = useNavigate()

  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }

  const login = () => {
      axios.post("http://localhost:9002/login", user)
      .then(res => {
          alert(res.data.message)
          setLoginUser(res.data.user)
          navigate("/Bloodrequest")
      })
  }

  return (
    <div>
      <div className="section">
  <div className="container">
    <div className="row full-height justify-content-center">
      <div className="col-12 text-center align-self-center py-3">
        <div className="section pb-5  text-center">
          <div className="card-3d-wrap mx-auto">
            <div className="card-3d-wrapper">
              <div className="card-front">
                <div className="center-wrap">
                  <div className="section text-center">
                    <h4 className="mb-4 pb-3">Log In</h4>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-style"
                        placeholder="Your Email"
                        id="logemail"
                        autoComplete="off"
                        name="email" value={user.email} onChange={handleChange}
                      />
                      <i className="input-icon uil uil-at" />
                    </div>
                    <div className="form-group mt-2">
                      <input
                        type="password"
                        name="password" value={user.password} onChange={handleChange}
                        className="form-style"
                        placeholder="Your Password"
                        id="logpass"
                        autoComplete="off"
                      />
                      <i className="input-icon uil uil-lock-alt" />
                    </div>
                    <button onClick={login}  className="btn mt-4">
                      Log In
                    </button>
                    <div>or</div>
                    <button onClick={() => navigate("/Signup")}  className="btn mt-4">
                      Sign Up
                    </button>
                    <p className="mb-0 mt-4 text-center">
                      <a href="#0" className="link">
                        Forgot your password?
                      </a>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
              {/* <div className="card-back">
                <div className="center-wrap">
                  <div className="section text-center">
                    <h4 className="mb-4 pb-3">Sign Up</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        name="logname"
                        className="form-style"
                        placeholder="Your Full Name"
                        id="logname"
                        autoComplete="off"
                      />
                      <i className="input-icon uil uil-user" />
                    </div>
                    <div className="form-group mt-2">
                      <input
                        type="email"
                        name="logemail"
                        className="form-style"
                        placeholder="Your Email"
                        id="logemail"
                        autoComplete="off"
                      />
                      <i className="input-icon uil uil-at" />
                    </div>
                    <div className="form-group mt-2">
                      <input
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Your Password"
                        id="logpass"
                        autoComplete="off"
                      />
                      <i className="input-icon uil uil-lock-alt" />
                    </div>
                    <a href="#" className="btn mt-4">
                      submit
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
export default Login
