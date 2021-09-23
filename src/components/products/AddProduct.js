import React, { Fragment, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const onSubmit = (e) => {};

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-header'>
                <h5>ADD A NEW PRODUCT HERE!</h5>
              </div>
              <div className='card-body'>
                <form
                  className='needs-validation'
                  noValidate=''
                  onSubmit={onSubmit}>
                  <div className='form-row'>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom01'>Vendor Id</label>
                      <input
                        className='form-control'
                        name='vendorId'
                        type='text'
                        placeholder='Vendor Id'
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom01'>Product Title</label>
                      <input
                        className='form-control'
                        name='productTitle'
                        type='text'
                        placeholder='productTitle'
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom02'>Location</label>
                      <input
                        className='form-control'
                        name='location'
                        type='text'
                        placeholder='Location'
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom03'>Religion Place</label>
                      <input
                        className='form-control'
                        name='religionPlace'
                        type='text'
                        placeholder='Religion Place'
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom04'>Price</label>
                      <input
                        className='form-control'
                        id='validationCustom04'
                        name='price'
                        type='text'
                        placeholder='Price'
                      />
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom05'>Product About</label>
                      <input
                        className='form-control'
                        id='validationCustom05'
                        name='productAbout'
                        type='text'
                        placeholder='Enter about the product'
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom03'>
                        Product Details
                      </label>
                      <input
                        className='form-control'
                        name='productDetails'
                        type='text'
                        placeholder='Product Details'
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <div className='form-group mb-0'>
                        <label htmlFor='exampleFormControlTextarea4 validationCustom03'>
                          Product Description
                        </label>
                        <textarea
                          className='form-control'
                          name='productDescription'
                          id='exampleFormControlTextarea4'
                          placeholder='Enter the product description'
                          rows='3'></textarea>
                      </div>
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom01'>
                        choose Product Picture
                      </label>
                      <input
                        className='form-control'
                        name='imageUrl'
                        type='file'
                        placeholder='Choose the image'
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom03'>Religion</label>
                      <input
                        className='form-control'
                        name='religion'
                        type='text'
                        placeholder='Religion'
                      />
                    </div>
                  </div>

                  <button className='btn btn-primary' type='submit'>
                    Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddProduct;
