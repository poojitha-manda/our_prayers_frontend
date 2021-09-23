import React, { Fragment, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
const AddVendor = () => {
  const { religion1, religionPlace1, location1 } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [location, setLocation] = useState(location1);
  const [religionPlace, setReligionPlace] = useState(religionPlace1);
  const [religion, setReligion] = useState(religion1);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const handleSuccess = () => {
    history.push(`${process.env.PUBLIC_URL}/vendor/viewvendors`);
  };
  let config = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (phone.length < 10) {
      toast.warn("Enter a valid Phone number!");
    } else if (password !== confirmPassword) {
      toast.warn("Passwords doesn't match!");
    } else if (password.length < 6) {
      toast.warn("Password must be atleast 6 characters!");
    } else {
      try {
        setLoading(true);
        const data = await axios.post(
          "https://ourprayers.wielabs.tech/api/v1/vendor/register",
          {
            name,
            email,
            password,
            address,
            location,
            religion,
            religionPlace,
            phone,
          }
        );
        toast.success("Vendor added successfully!");
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setLocation("");
        setAddress("");
        setReligion("");
        setReligionPlace("");
        setConfirmPassword("");
        setPhone("");
        handleSuccess();
      } catch (error) {
        setLoading(false);
        toast.error(error.response.data.err);
      }
    }
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-header'>
                <h5>ADD A NEW VENDOR HERE!</h5>
              </div>
              <div className='card-body'>
                <form className='needs-validation' onSubmit={onSubmit}>
                  <div className='form-row'>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom01'>Name</label>
                      <input
                        className='form-control'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Full Name'
                        required
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom01'>Email</label>
                      <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom02'>Password</label>
                      <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom02'>
                        Confirm Password
                      </label>
                      <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom03'>Phone Number</label>
                      <input
                        className='form-control'
                        type='integer'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom04'>Location</label>
                      <input
                        className='form-control'
                        id='validationCustom04'
                        type='text'
                        placeholder='Location'
                        value={location}
                        required
                        disabled
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom05'>Address</label>
                      <textarea
                        className='form-control'
                        id='validationCustom05'
                        type='text'
                        placeholder='Complete Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom03'>
                        Religious Place
                      </label>
                      <input
                        className='form-control'
                        type='text'
                        placeholder='Religious Place'
                        value={religionPlace}
                        required
                        disabled
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom04'>Religion</label>
                      <input
                        className='form-control'
                        id='validationCustom04'
                        type='text'
                        placeholder='Religion'
                        value={religion}
                        required
                        disabled
                      />
                    </div>
                  </div>

                  {loading ? (
                    <button className='btn btn-primary'>Loading...</button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      Add Vendor
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddVendor;
