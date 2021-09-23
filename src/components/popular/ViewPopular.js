import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
const ViewPopular = () => {
  const { religion } = useParams();
  const [populars, setPopulars] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://ourprayers.wielabs.tech/api/v1/popular/${id}`
      );
      setPopulars(populars.filter((popular) => popular._id != id));
      toast.success("popular Deleted Successfully");
    } catch (error) {}
  };
  const data = async () => {
    try {
      const res = await axios.get(
        `https://ourprayers.wielabs.tech/api/v1/popular/all/${religion}`
      );
      console.log(res.data.content);
      setPopulars(res.data.content);
    } catch (error) {}
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='card'>
          <div className='card-header'>
            <h4 className='card-title mb-0'>Popular Places Listing</h4>
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
        </div>
      </div>
      <div className='col-md-6 col-xl-3 set-col-6'>
        <div className='card'>
          {populars.map((popular, index) => (
            <div key={popular._id} className='blog-box blog-grid text-center'>
              <img
                style={{ width: 200, height: 200 }}
                src={`https://ourprayers.wielabs.tech/${popular.popularImgUrl}`}
                alt='poplar image'
              />
              <div className='blog-details-main'>
                <hr />

                <h4 className='blog-bottom-details'>{popular.location}</h4>
                <h4 className='blog-bottom-details'>{popular.religion}</h4>
                <h4 className='blog-bottom-details'>{popular.religionPlace}</h4>
                <div>
                  <Link
                    className='btn btn-primary btn-sm'
                    yle={{ margin: "5px" }}
                    to={`${process.env.PUBLIC_URL}/popular/editpopular/${popular._id}`}>
                    <i className='fa fa-pencil'></i> Edit
                  </Link>
                </div>
                <div>
                  <button
                    className='btn btn-danger btn-sm'
                    style={{ margin: "5px" }}
                    href='javascript'
                    onClick={() => handleDelete(popular._id)}>
                    <i className='fa fa-trash'></i> Delete
                  </button>
                </div>
                <div>
                  <Link
                    className='btn btn-warning btn-sm'
                    yle={{ margin: "5px" }}
                    to={`${process.env.PUBLIC_URL}/vendor/addvendor/${popular.religion}/${popular.religionPlace}/${popular.location}`}>
                    <i className='fa fa-plus'></i> Add Vendor
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </Fragment>
  );
};

export default ViewPopular;
