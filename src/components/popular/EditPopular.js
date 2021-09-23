import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
const EditPopular = () => {
  let { id } = useParams();
  const [location, setLocation] = useState("");
  const [religion, setReligion] = useState("");
  const [religionPlace, setReligionPlace] = useState("");
  const [popularImgUrl, setPopularImgUrl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  let history = useHistory();
  const handleSuccess = () => {
    history.push(`${process.env.PUBLIC_URL}/popular/viewpopular/${religion}`);
  };
  useEffect(async () => {
    try {
      setPageLoading(true);

      const res = await axios.get(
        `https://ourprayers.wielabs.tech/api/v1/popular/${id}`
      );
      console.log(res.data.content);
      setLocation(res.data.content[0].location);
      setReligion(res.data.content[0].religion);
      setReligionPlace(res.data.content[0].religionPlace);
      setPopularImgUrl(res.data.content[0].popularImgUrl);
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
        `https://ourprayers.wielabs.tech/api/v1/popular/update/${id}`,
        {
          religion,
          religionPlace,
          location,
        }
      );
      setLoading(false);
      toast.success("Popular Updated");
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
                    <h5>UPDATE POPULAR HERE!</h5>
                  </div>
                  <div className='card-body'>
                    <div className='col-md-6 mb-3'>
                      <img
                        style={{ width: 100, height: 100 }}
                        src={`https://ourprayers.wielabs.tech/${popularImgUrl}`}
                        alt='Popular image'
                      />
                    </div>
                    <form
                      className='needs-validation'
                      noValidate=''
                      onSubmit={onSubmitForm}>
                      <div className='form-row'>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom01'>Religion</label>
                          <input
                            className='form-control'
                            name='religion'
                            type='text'
                            value={religion}
                            onChange={(e) => setReligion(e.target.value)}
                          />
                        </div>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom01'>
                            Religion Place
                          </label>
                          <input
                            className='form-control'
                            name='religionPlace'
                            type='integer'
                            value={religionPlace}
                            onChange={(e) => setReligionPlace(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className='form-row'>
                        <div className='col-md-6 mb-3'>
                          <label htmlFor='validationCustom02'>Location</label>
                          <input
                            className='form-control'
                            name='location'
                            type='text'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                        </div>
                      </div>

                      {loading ? (
                        <button className='btn btn-primary'>Loading...</button>
                      ) : (
                        <button className='btn btn-primary' type='submit'>
                          Update Popular
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

export default EditPopular;
