import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router";

const Signin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const loginWithJwt = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `https://ourprayers.wielabs.tech/api/v1/vendor/login`,
        { email, password }
      );
      history.push(`${process.env.PUBLIC_URL}/admindashboard/dashboard`);
      localStorage.setItem("token", res.data.token);
      console.log(localStorage.getItem("token"));
      console.log("resssss", res);
    } catch (error) {}
  };

  return (
    <div>
      <div className='page-wrapper'>
        <div className='container-fluid p-0'>
          {/* <!-- login page start--> */}
          <div className='authentication-main'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='auth-innerright'>
                  <div className='authentication-box'>
                    <div className='card mt-4'>
                      <div className='card-body'>
                        <div className='text-center'>
                          <h4>LOGIN</h4>
                          <h6>{"Enter your Username and Password"} </h6>
                        </div>
                        <form className='theme-form' onSubmit={loginWithJwt}>
                          <div className='form-group'>
                            <label className='col-form-label pt-0'>
                              YourName
                            </label>
                            <input
                              className='form-control'
                              type='email'
                              name='email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder='Email address'
                            />
                          </div>
                          <div className='form-group'>
                            <label className='col-form-label'>Password</label>
                            <input
                              className='form-control'
                              type='password'
                              name='password'
                              value={password}
                              placeholder='Password'
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div className='form-group form-row mt-3 mb-0'>
                            <button
                              className='btn btn-primary btn-block'
                              type='submit'>
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          {/* <!-- login page end--> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Signin);
