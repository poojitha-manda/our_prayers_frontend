import React, { Fragment, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const data = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://ourprayers.wielabs.tech/api/v1/item"
      );
      setProducts(res.data.content);
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
                  <h4 className='card-title mb-0'>PRODUCT LISTING...</h4>
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
                        <th>Product ID</th>
                        <th>Product Image</th>
                        <th>Vendor Id</th>
                        <th>Product Name</th>
                        <th>Product Price </th>
                        <th>Product Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product, index) => (
                        <tr key={product._id}>
                          <td>{product._id}</td>
                          <td>
                            <img
                              style={{ width: 100, height: 100 }}
                              src={`https://ourprayers.wielabs.tech/${product.imageUrl}`}
                              alt='product image'
                            />
                          </td>
                          <td>{product.vendorId}</td>
                          <td>{product.productTitle}</td>
                          <td>{product.price}</td>
                          <td>{product.productDescription}</td>
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

export default ViewProducts;
