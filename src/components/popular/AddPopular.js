import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddPopular = () => {
  const [religionPlace, setReligionPlace] = useState("");
  const [location, setLocation] = useState("");
  const [religion, setReligion] = useState("");
  const [imageUrl, setimageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const handleSuccess = () => {
    history.push(`${process.env.PUBLIC_URL}/popular/viewpopular/${religion}`);
  };
  const imageData = (e) => {
    if (
      e.target.files[0].type === "image/jpg" ||
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/png"
    ) {
      setimageUrl(e.target.files[0]);
    } else {
      toast.warning("Image must be jpg/jpeg/png");
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!religionPlace || !religion || !location) {
      toast.warn("Please..Fill the required(*) field(s)!");
    } else if (!imageUrl) {
      toast.warn("Please Choose an Image!");
    } else {
      let formField = new FormData();

      formField.append("religion", religion);
      formField.append("religionPlace", religionPlace);
      formField.append("location", location);
      if (imageUrl !== null) {
        formField.append("imageUrl", imageUrl);
      }
      try {
        setLoading(true);
        const data = await axios.post(
          "https://ourprayers.wielabs.tech/api/v1/popular/post",
          formField
        );
        toast.success("Popular Place added succesfully");
        setLoading(false);
        setReligionPlace("");
        setReligion("");
        setLocation("");
        setimageUrl(null);
        handleSuccess();
      } catch (error) {
        setLoading(false);
        console.log(error);
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
                <h5>ADD A NEW POPULAR RELIGION PLACE HERE!</h5>
              </div>
              <div className='card-body'>
                <form
                  className='needs-validation'
                  noValidate=''
                  onSubmit={onSubmit}>
                  <div className='form-row'>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom04'>
                        Religion Place*
                      </label>
                      <input
                        className='form-control'
                        id='validationCustom04'
                        value={religionPlace}
                        onChange={(e) => setReligionPlace(e.target.value)}
                        type='text'
                        placeholder='Religion Place'
                      />
                    </div>

                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom04'>Location*</label>
                      <input
                        className='form-control'
                        id='validationCustom04'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type='text'
                        placeholder='location'
                      />
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom04'>Religion*</label>
                      <br />
                      <select
                        className='form-control'
                        aria-label='Default select example'
                        value={religion}
                        onChange={(e) => setReligion(e.target.value)}>
                        <option selected>Open this select menu</option>
                        <option value='Hindu'>Hindu</option>
                        <option value='Muslim'>Muslim</option>
                        <option value='Sikh'>Sikh</option>
                      </select>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <label htmlFor='validationCustom01'>choose Image*</label>
                      <input
                        className='form-control'
                        onChange={imageData}
                        type='file'
                        placeholder='Choose the imageUrl'
                      />
                    </div>
                  </div>
                  {loading ? (
                    <button className='btn btn-primary'>Loading...</button>
                  ) : (
                    <button className='btn btn-primary' type='submit'>
                      Add
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

export default AddPopular;
