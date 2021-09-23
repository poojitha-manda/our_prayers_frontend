import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Fragment>
      <div className='col-xl-5 xl-100'>
        <div className='card'>
          <div className='card-header'>
            <h5>Orders Today</h5>
          </div>
          <div className='card-body'>
            <div className='table-responsive sellers'>
              <table className='table table-bordernone'>
                <thead>
                  <tr>
                    <th scope='col'>OrderId</th>
                    <th scope='col'>Items</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>isDelivered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>milk,bread</p>
                    </td>
                    <td>
                      <p>150/-</p>
                    </td>
                    <td>
                      <p>No</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-header'>
          <h5>Select a range to view orders</h5>
        </div>
        <div className='card-body'>
          <form className='theme-form'>
            <div className='form-group form-row '>
              <label className='text-right'>From</label>
              <div className='col-md-4 mb-3'>
                <div className='input-group'>
                  <DatePicker
                    className='form-control digits'
                    selected={startDate}
                  />
                </div>
              </div>
              <label className='text-right'>To</label>
              <div className='col-md-4 mb-3'>
                <div className='input-group'>
                  <DatePicker
                    className='form-control digits'
                    selected={endDate}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='col-xl-5 xl-100'>
        <div className='card'>
          <div className='card-header'>
            <h5>Payments Today</h5>
          </div>
          <div className='card-body'>
            <div className='table-responsive sellers'>
              <table className='table table-bordernone'>
                <thead>
                  <tr>
                    <th scope='col'>OrderId</th>
                    <th scope='col'>UserId</th>
                    <th scope='col'>Total Amount</th>
                    <th scope='col'>Payment Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>1</p>
                    </td>
                    <td>
                      <p>###123</p>
                    </td>
                    <td>
                      <p>150/-</p>
                    </td>
                    <td>
                      <p>Google pay</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-header'>
          <h5>Select a range to view payments</h5>
        </div>
        <div className='card-body'>
          <form className='theme-form'>
            <div className='form-group form-row '>
              <label>From</label>
              <div className='col-md-4 mb-3'>
                <div className='input-group'>
                  <DatePicker
                    className='form-control digits'
                    selected={startDate}
                  />
                </div>
              </div>
              <label>To</label>
              <div className='col-md-4 mb-3'>
                <div className='input-group'>
                  <DatePicker
                    className='form-control digits'
                    selected={endDate}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
