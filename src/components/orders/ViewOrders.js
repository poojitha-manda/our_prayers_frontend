import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = async () => {
    try {
      const res = await axios.get(
        "https://ourprayers.wielabs.tech/api/v1/order/admin/all"
      );
      setOrders(res.data.content);
      console.log(res.data.content)
    } catch (error) {}
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
                <h5>Orders Listing...</h5>
              </div>
              <div className='card-body'>
                <div className='table-responsive sellers'>
                  <table className='table table-bordernone'>
                    <thead>
                      <tr>
                        <th scope='col'>Order Id</th>
                        <th scope='col'>Total Amount</th>
                        <th scope='col'>User Id</th>
                        <th scope='col'>Phone</th>
                         <th scope='col'>Payment Method</th>
                        <th scope='col'>Payment Status</th>
                        
                        <th scope='col'>Items</th>
                        <th scope='col'>Quantity </th>
                        <th scope = 'col'>Order Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={order._id}>
                          <td>
                            <div className='d-inline-block align-middle'>
                              <div className='d-inline-block'>
                                <p>{order._id}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p>{order.totalAmount}</p>
                          </td>
              
                          <td>
                            <p>{order.userId}</p>
                          </td>
                          
                          <td>
                            <p>{order.phone}</p>
                          </td>
                          <td>
                            <p>{order.paymentMethod}</p>
                          </td>
                          <td>
                            <p>{order.paymentStatus}</p>
                          </td>
                          
                          <td>
                          {order.items.map((item,index)=>
                          <ul key = {index}>
                          <li style={{display:"flex"}}>{item.productTitle}</li>
        
                          </ul>
                          )}
                          </td>
                           <td>
                          {order.items.map((item,index)=>
                          <ul key = {index}>
                          <li>{item.quantity}</li>
        
                          </ul>
                          )}
                          </td>
                           <td>
                          {order.items.map((item,index)=>
                          <ul key = {index}>
                          <li style={{display:"flex"}}>{item.status ==1&& "Order Placed"}</li>
                          <li style={{display:"flex"}}>{item.status ==2&& "Order Confirmed"}</li>
                          <li style={{display:"flex"}}>{item.status ==3&& "Order Dispatched"}</li>
                          <li style={{display:"flex"}}>{item.status ==4&& "Out for Delivery"}</li>
                          <li style={{display:"flex"}}>{item.status ==5&& "Order Delivered"}</li>
                          
                          </ul>
                          )}
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

export default ViewOrders;
