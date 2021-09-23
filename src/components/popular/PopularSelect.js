import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Hindu from "./Hindu.jpg";
import muslim from "./muslim.jpg";
import sikh from "./sikh.jpg";
import { Link, useParams } from "react-router-dom";
const PopularSelect = () => {
  const [religion, setReligion] = useState("");
  let HinduReg = "hindu";
  let MuslimReg = "muslim";
  let SikhReg = "sikh";
  return (
    <Fragment>
      <div className='container-fluid'>
        <div className='card'>
          <div className='card-header'>
            <h4 className='card-title mb-0'>
              Select a Religion to know the Popular Places
            </h4>
          </div>
        </div>

        <div className='col-md-6 col-xl-3 set-col-6'>
          <div className='card'>
            <div className='blog-box blog-grid text-center'>
              {/* <img className='img-fluid top-radius-blog' src={} alt='' /> */}

              <img
                style={{ width: 200, height: 200 }}
                src={Hindu}
                alt='Hindu Religion'
              />
              <div>
                <Link
                  className='btn btn-primary btn-sm'
                  style={{ margin: "5px" }}
                  to={`${process.env.PUBLIC_URL}/popular/viewpopular/hindu`}>
                  Popular
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xl-3 set-col-6'>
          <div className='card'>
            <div className='blog-box blog-grid text-center'>
              {/* <img className='img-fluid top-radius-blog' src={} alt='' /> */}

              <img
                style={{ width: 200, height: 200 }}
                src={muslim}
                alt='Muslim Religion'
              />
              <div>
                <Link
                  className='btn btn-primary btn-sm'
                  style={{ margin: "5px" }}
                  to={`${process.env.PUBLIC_URL}/popular/viewpopular/muslim`}>
                  Popular
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-xl-3 set-col-6'>
          <div className='card'>
            <div className='blog-box blog-grid text-center'>
              {/* <img className='img-fluid top-radius-blog' src={} alt='' /> */}

              <img
                style={{ width: 200, height: 200 }}
                src={sikh}
                alt='Sikh Religion'
              />
              <div>
                <Link
                  className='btn btn-primary btn-sm'
                  style={{ margin: "5px" }}
                  to={`${process.env.PUBLIC_URL}/popular/viewpopular/sikh`}>
                  Popular
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopularSelect;
