import React, { Fragment, useState, useEffect } from "react";
import {toast} from "react-toastify"
import axios from "axios";
import { Link } from "react-router-dom";
const ViewVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = async () => {
    try {
      const res = await axios.get(
        "https://ourprayers.wielabs.tech/api/v1/vendor/vendors"
      );
      setVendors(res.data.content);
    } catch (error) {}
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='edit-profile'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header'>
                  <h4 className='card-title mb-0'>VENDOR LISTING...</h4>
                  <div className='card-options'>
                    <a
                      className='card-options-collapse'
                      href='javascript'
                      data-toggle='card-collapse'>
                      <i className='fe fe-chevron-up'></i>
                    </a>
                    <a
                      className='card-options-remove'
                      href='javascript'
                      data-toggle='card-remove'>
                      <i className='fe fe-x'></i>
                    </a>
                  </div>
                </div>
                <div className='table-responsive'>
                  <table className='table card-table table-vcenter text-nowrap'>
                    <thead>
                      <tr>
                        <td>Vendor ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone Number</td>
                        <td>Location</td>
                        <td>Address</td>
                        <td>Religious Place</td>
                        <td>Religion</td>
                        <td>Edit</td>
                        <td>Delete</td>
                      </tr>
                    </thead>
                    <tbody>
                    {vendors.map((vendor,index)=>
                      <tr key = {vendor._id}>
                        <td>{vendor._id}</td>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.phone}</td>
                        <td>{vendor.location}</td>
                        <td>{vendor.address}</td>
                        <td>{vendor.religionPlace}</td>
                        <td>{vendor.religion}</td>
                        <td className='text-right'>
                          <Link
                            className='btn btn-primary btn-sm'
                            to={`${process.env.PUBLIC_URL}/vendor/editvendor/${vendor._id}`}>
                            <i className='fa fa-pencil'></i> Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className='btn btn-danger btn-sm'
                            href='javascript'>
                            <i className='fa fa-trash'></i> Delete
                          </button>
                        </td>
                      </tr>
                      )}
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

export default ViewVendors;
