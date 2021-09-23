import React, { Fragment, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const AddCoupon = () => {
  // initialise the hook
  const [coupon, setCoupon] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState("");
  let history = useHistory();
  const handleSuccess = () => {
    history.push(`${process.env.PUBLIC_URL}/coupons/viewcoupons`);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!coupon || !price || !description || !endDate) {
      toast.warn("Please fill the required fiels!");
    } else {
      try {
        setLoading(true);
        const data = await axios.post(
          "https://ourprayers.wielabs.tech/api/v1/coupon/post",
          {
            coupon,
            price,
            description,
            endDate,
          }
        );
        toast.success("Coupon added Successfully");
        setLoading(false);
        setCoupon("");
        setPrice("");
        setDescription("");
        setEndDate("");
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
                <h5>ADD A NEW COUPON HERE!</h5>
              </div>
              <div className='card-body'>
                <form
                  className='needs-validation'
                  noValidate=''
                  onSubmit={onSubmit}>
                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom01'>Coupon Name*</label>
                      <input
                        className='form-control'
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        type='text'
                        placeholder='Coupon Name'
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom01'>Coupon Price*</label>
                      <input
                        className='form-control'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type='integer'
                        placeholder='Coupon Price'
                      />
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom02'>
                        Coupon Description*
                      </label>
                      <input
                        className='form-control'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        placeholder='Coupon Description'
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom03'>End Date*</label>
                      <input
                        className='form-control'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        type='date'
                        placeholder='End Date'
                      />
                    </div>
                  </div>

                  {loading ? (
                    <button className='btn btn-primary'>Loading...</button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      Add Coupon
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

export default AddCoupon;
