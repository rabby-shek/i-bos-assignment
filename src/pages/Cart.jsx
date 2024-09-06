import React from 'react';
import { FaTrash } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
const Cart = () => {
  return (
  <section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart - 2 items</h5>
          </div>
          <div className="card-body">
            {/* Single item */}
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                {/* Image */}
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp" className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                  </a>
                </div>
                {/* Image */}
              </div>
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                {/* Data */}
                <p><strong>Blue denim shirt</strong></p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger btn-sm me-1 mb-2" data-mdb-tooltip-init title="Remove item">
                  <FaTrash />
                </button>
                {/* Data */}
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* Quantity */}
                <div className="d-flex mb-4" style={{maxWidth: 300}}>
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    <LuMinus />
                  </button>
                  <div data-mdb-input-init className="form-outline">
                    <input id="form1" min={0} name="quantity" defaultValue={1} type="number" className="form-control" />
                  </div>
                  <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    <IoIosAdd />
                  </button>
                </div>
                {/* Quantity */}
                {/* Price */}
                <p className="text-start text-md-center">
                  <strong>$17.99</strong>
                </p>
                {/* Price */}
              </div>
            </div>
            {/* Single item */}
            <hr className="my-4" />
            {/* Single item */}
            {/* Single item */}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>$53.98</strong></span>
              </li>
            </ul>
            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block w-100">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Cart;
