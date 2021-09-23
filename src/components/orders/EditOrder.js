import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form'
const EditProduct = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
     
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5>UPDATE THE ORDER HERE!</h5>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">Name</label>
                      <input className="form-control" name="Name" type="text" placeholder="Full Name" ref={register({ required: true })} />
                      <span>{errors.Name && 'Name is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">Email</label>
                      <input className="form-control" name="Email" type="email" placeholder="Email" ref={register({ required: true })} />
                      <span>{errors.Email && 'Email is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom02">Password</label>
                      <input className="form-control" name="Password" type="password" placeholder="Password" ref={register({ required: true })} />
                      <span>{errors.Password && 'Password is required'}</span>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom03">Phone Number</label>
                      <input className="form-control" name="Phone" type="integer" placeholder="Phone Number" ref={register({ required: true })} />
                      <span>{errors.Phone && 'Please provide a valid phone number'}</span>
                      <div className="invalid-feedback">{"Please provide a valid phone number."}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom04">Location</label>
                      <input className="form-control" id="validationCustom04" name="Location" type="text" placeholder="Location" ref={register({ required: true })} />
                      <span>{errors.Location && 'Please provide a valid location.'}</span>
                      <div className="invalid-feedback">{"Please provide a valid location."}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom05">Address</label>
                      <input className="form-control" id="validationCustom05" name="Address" type="text" placeholder="Complete Address" ref={register({ required: true })} />
                      <span>{errors.Address && 'Address is required'}</span>
                      <div className="invalid-feedback">{"Address is required"}</div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom03">Religious Place</label>
                      <input className="form-control" name="ReligiousPlace" type="text" placeholder="Religious Place" ref={register({ required: true })} />
                      <span>{errors.ReligiousPlace && 'Religious Place is required'}</span>
                      <div className="invalid-feedback">{"Religious Place is required"}</div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="validationCustom04">Religion</label>
                      <input className="form-control" id="validationCustom04" name="Religion" type="text" placeholder="Religion" ref={register({ required: true })} />
                      <span>{errors.Religion && 'Religion is required.'}</span>
                      <div className="invalid-feedback">{"Religion is required."}</div>
                    </div>
                  </div>
                  
                  <button className="btn btn-primary" type="submit">Update Order</button>
                </form>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditProduct;