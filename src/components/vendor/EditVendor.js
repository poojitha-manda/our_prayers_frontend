import axios from 'axios'
import React, { Fragment,useEffect, useState } from 'react';
import {useHistory,useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
const EditVendor = () => {
  let {id} = useParams()
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")
  const [religionPlace, setReligionPlace] = useState("")
  const [religion, setReligion] = useState("")
  const [loading, setLoading] = useState(false)
  const [pageLoading, setPageLoading] = useState(false)
  let history = useHistory();
  const handleSuccess = () => {
    history.push(`${process.env.PUBLIC_URL}/vendor/viewvendors`);
  };
  useEffect(async () => {
    try {
      setPageLoading(true);
      
      const res = await axios.get(
        `https://ourprayers.wielabs.tech/api/v1/vendor/get/${id}`
      );
      setName(res.data.content.name)
      setEmail(res.data.content.email)
      setPhone(res.data.content.phone)
      setLocation(res.data.content.location)
      setAddress(res.data.content.address)
      setReligionPlace(res.data.content.religionPlace)
      setReligion(res.data.content.religion)
    } catch (error) {
      setPageLoading(false);
      toast.error(error);
    }
  }, []);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.patch(
        `https://ourprayers.wielabs.tech/api/v1/vendor/${id}`,
        {
          name,
          email,
          phone,
          location,
          address,
          religionPlace,
          religion
        }
      );
      setLoading(false)
      toast.success("Vendor Updated")
      handleSuccess()
    } catch (error) {
      setLoading(false)
      toast.error(error.response.res.err)
    }
  };
  return (
    <Fragment>
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>UPDATE THE VENDOR HERE!</h5>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate="" onSubmit={onSubmitForm}>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">Name</label>
                      <input className="form-control" name="name" value={name}  type="text" placeholder="Full Name" 
                      onChange= {(e) => setName(e.target.value)} />
                      
                      
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">Email</label>
                      <input className="form-control" name="email" value={email}  type="email" placeholder="Email" 
                      onChange={(e) => setEmail(e.target.value)}/>
                      
                    </div>
               
                  </div>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom03">Phone Number</label>
                      <input className="form-control" name="phone"  value = {phone} type="integer" placeholder="Phone Number"  onChange = {(e) => setPhone(e.target.value)}/>
                      
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom04">Location</label>
                      <input className="form-control" id="validationCustom04" name="location" value = {location} type="text" placeholder="Location"  onChange={(e)=>setLocation(e.target.value)} />
                      
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom05">Address</label>
                      <input className="form-control" id="validationCustom05" name="address" value={address} type="text" placeholder="Complete Address" onChange={(e)=>setAddress(e.target.value)}  />
                     
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom03">Religious Place</label>
                      <input className="form-control" name="religiousPlace" value={religionPlace} type="text"  placeholder="Religious Place" onChange={(e)=>setReligionPlace(e.target.value)}  />
                      
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom04">Religion</label>
                      <input className="form-control" id="validationCustom04" name="religion" value={religion} type="text" placeholder="Religion"  onChange={(e)=>setReligion(e.target.value)}  />
                      
                    </div>
                  </div>
                  
                  {loading ? (
                    <button className='btn btn-primary'>Loading...</button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      Update Vendor
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

export default EditVendor;