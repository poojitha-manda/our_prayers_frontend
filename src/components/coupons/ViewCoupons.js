import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const ViewCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://ourprayers.wielabs.tech/api/v1/coupon/${id}`
      );
      setCoupons(coupons.filter((coupon) => coupon._id != id));
      toast.success("Coupon Deleted Successfully");
    } catch (error) {}
  };
  const data = async () => {
    try {
      const res = await axios.get(
        "https://ourprayers.wielabs.tech/api/v1/coupon/"
      );
      setCoupons(res.data.content);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.err);
    }
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-xl-5 xl-100'>
            <div className='card'>
              <div className='card-header'>
                <h5>Coupon Listing...</h5>
              </div>
              <div className='card-body'>
                <div className='table-responsive sellers'>
                  <table className='table table-bordernone'>
                    <thead>
                      <tr>
                        <th scope='col'>Coupon Id</th>
                        <th scope='col'>Coupon Name</th>

                        <th scope='col'>Price</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>End Date</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coupons.map((coupon, index) => (
                        <tr key={coupon._id}>
                          <td>
                            <div className='d-inline-block align-middle'>
                              <div className='d-inline-block'>
                                <p>{coupon._id}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{coupon.coupon}</p>
                          </td>
                          <td>
                            <p>{coupon.price}</p>
                          </td>
                          <td>
                            <p>{coupon.description}</p>
                          </td>
                          <td>
                            <p>{coupon.endDate}</p>
                          </td>
                          <td>
                            <div>
                              <Link
                                className='btn btn-primary btn-sm'
                                style={{ margin: "5px" }}
                                to={`${process.env.PUBLIC_URL}/coupons/editcoupon/${coupon._id}`}>
                                <i className='fa fa-pencil'></i> Edit
                              </Link>
                            </div>
                          </td>
                          <td>
                            <div>
                              <button
                                className='btn btn-danger btn-sm'
                                style={{ margin: "5px" }}
                                onClick={() => handleDelete(coupon._id)}>
                                <i className='fa fa-trash'></i> Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewCoupons;
