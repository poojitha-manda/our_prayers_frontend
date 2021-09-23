import React, { Fragment } from "react";

import { useForm } from "react-hook-form";
const EditProduct = () => {
  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = (data) => {
    if (data !== "") {
      alert("You submitted the form and stuff!");
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='card'>
              <div className='card-header'>
                <h5>UPDATE PRODUCT HERE!</h5>
              </div>
              <div className='card-body'>
                <form
                  className='needs-validation'
                  noValidate=''
                  onSubmit={handleSubmit(onSubmit)}>
                  <div className='form-row'>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom01'>Vendor Id</label>
                      <input
                        className='form-control'
                        name='vendorId'
                        type='text'
                        placeholder='Vendor Id'
                        ref={register({ required: true })}
                      />
                      <span>{errors.vendorId && "Vendor Id is required"}</span>
                      <div className='valid-feedback'>{"Looks good!"}</div>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom01'>Product Title</label>
                      <input
                        className='form-control'
                        name='productTitle'
                        type='text'
                        placeholder='productTitle'
                        ref={register({ required: true })}
                      />
                      <span>
                        {errors.productTitle && "Product title is required"}
                      </span>
                      <div className='valid-feedback'>{"Looks good!"}</div>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom02'>Location</label>
                      <input
                        className='form-control'
                        name='location'
                        type='text'
                        placeholder='Location'
                        ref={register({ required: true })}
                      />
                      <span>{errors.location && "Location is required"}</span>
                      <div className='valid-feedback'>{"Looks good!"}</div>
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
                        ref={register({ required: true })}
                      />
                      <span>
                        {errors.religionPlace && "Religion place is required"}
                      </span>
                      <div className='invalid-feedback'>
                        {"Religion place is required."}
                      </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom04'>Price</label>
                      <input
                        className='form-control'
                        id='validationCustom04'
                        name='price'
                        type='text'
                        placeholder='Price'
                        ref={register({ required: true })}
                      />
                      <span>{errors.price && "Price is required"}</span>
                      <div className='invalid-feedback'>
                        {"Price is required"}
                      </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <label htmlFor='validationCustom05'>Product About</label>
                      <input
                        className='form-control'
                        id='validationCustom05'
                        name='productAbout'
                        type='text'
                        placeholder='Enter about the product'
                        ref={register({ required: true })}
                      />
                      <span>
                        {errors.productAbout && "Product about is required"}
                      </span>
                      <div className='invalid-feedback'>
                        {"Product about is required"}
                      </div>
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
                        ref={register({ required: true })}
                      />
                      <span>
                        {errors.productDetails && "Religious Place is required"}
                      </span>
                      <div className='invalid-feedback'>
                        {"Religious Place is required"}
                      </div>
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
                        <span>
                          {errors.productDescription &&
                            "Product description is required"}
                        </span>
                        <div className='invalid-feedback'>
                          {"Product description is required"}
                        </div>
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
                        ref={register({ required: true })}
                      />
                      <span>
                        {errors.imageUrl && "Product Picture is required"}
                      </span>
                      <div className='valid-feedback'>{"Looks good!"}</div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom03'>Religion</label>
                      <input
                        className='form-control'
                        name='religion'
                        type='text'
                        placeholder='Religion'
                        ref={register({ required: true })}
                      />
                      <span>{errors.religion && "Religion is required"}</span>
                      <div className='invalid-feedback'>
                        {"Religion is required"}
                      </div>
                    </div>
                  </div>

                  <button className='btn btn-primary' type='submit'>
                    Update Product
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

export default EditProduct;
