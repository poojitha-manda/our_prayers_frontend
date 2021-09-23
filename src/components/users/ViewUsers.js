import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://ourprayers.wielabs.tech/api/v1/user/users"
      );
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
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
                  <h4 className='card-title mb-0'>USER LISTING...</h4>
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
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Is Verified</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user._id}>
                          <td>{user._id}</td>
                          <td>{user.firstName + " " + user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>
                            {user.houseNoandBuilding +
                              "," +
                              user.roadNoAreaColony +
                              "," +
                              user.city +
                              "," +
                              user.state +
                              "." +
                              user.pincode}
                          </td>
                          {user.verified ? <td>Yes</td> : <td>No</td>}
                          
                          
                        </tr>
                      ))}{" "}
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

export default ViewUsers;
