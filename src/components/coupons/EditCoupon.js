import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
const EditCoupon = () => {
  let { id } = useParams();
  const [coupon, setCoupon] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEnddate] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  let history = useHistory();
  const handleSuccess = () => {
    history.push(`${process.env.PUBLIC_URL}/coupons/viewcoupons`);
  };
  useEffect(async () => {
    try {
      setPageLoading(true);

      const res = await axios.get(
        `https://ourprayers.wielabs.tech/api/v1/coupon/${id}`
      );
      setCoupon(res.data.content.coupon);
      setPrice(res.data.content.price);
      setDescription(res.data.content.description);
      setEnddate(res.data.content.endDate);
      setPageLoading(false);
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
        `https://ourprayers.wielabs.tech/api/v1/coupon/${id}`,
        {
          coupon,
          price,
          description,
          endDate,
        }
      );
      setLoading(false);
      toast.success("Coupon Updated");
      handleSuccess();
    } catch (error) {
      setLoading(false);
      toast.error(error.response.res.err);
    }
  };

  return (
    <Fragment>
      {pageLoading ? (
        <Fragment>
          <div className={`loader-wrapper ${pageLoading ? "" : "loderhide"}`}>
            <div className='loader bg-white'>
              <div className='whirly-loader'> </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='card'>
                  <div className='card-header'>
                    <h5>UPDATE COUPON HERE!</h5>
                  </div>
                  <div className='card-body'>
                    <form
                      className='needs-validation'
                      noValidate=''
                      onSubmit={onSubmitForm}>
                      <div className='form-row'>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom01'>
                            Coupon Name
                          </label>
                          <input
                            className='form-control'
                            name='coupon'
                            type='text'
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom01'>
                            Coupon Price
                          </label>
                          <input
                            className='form-control'
                            name='price'
                            type='integer'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom02'>
                            Coupon Description
                          </label>
                          <input
                            className='form-control'
                            name='description'
                            type='text'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom03'>End Date</label>
                          <input
                            className='form-control'
                            name='endDate'
                            type='date'
                            value={endDate}
                            onChange={(e) => console.log(e.target.value)}
                          />
                        </div>
                      </div>

                      {loading ? (
                        <button className='btn btn-primary'>Loading...</button>
                      ) : (
                        <button className='btn btn-primary' type='submit'>
                          Update Coupon
                        </button>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default EditCoupon;
