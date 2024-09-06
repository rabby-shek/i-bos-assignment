import React from 'react';
import { FaTrash } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { useCartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart, updateItemQuantity } = useCartContext();

  const handleIncrement = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {cartItems.length} items</h5>
              </div>
              <div className="card-body">
                {cartItems.map((item) => (
                  <div className="row mb-4" key={item.id}>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={item.image} className="w-100" alt={item.name} />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{item.name}</strong></p>
                      <p>Color: {item.color || 'N/A'}</p>
                      <p>Size: {item.size || 'N/A'}</p>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm me-1 mb-2"
                        title="Remove item"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        <button
                          className="btn btn-primary px-3 me-2"
                          onClick={() => handleDecrement(item)}
                          disabled={item.quantity === 1}
                        >
                          <LuMinus />
                        </button>
                        <div className="form-outline">
                          <input
                            id={`form-${item.id}`}
                            min={0}
                            name="quantity"
                            value={item.quantity}
                            type="number"
                            readOnly
                            className="form-control"
                          />
                        </div>
                        <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={() => handleIncrement(item)}
                        >
                          <IoIosAdd />
                        </button>
                      </div>
                      <p className="text-start text-md-center">
                        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                ))}
                <hr className="my-4" />
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
                    <span>${totalAmount.toFixed(2)}</span>
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
                    <span><strong>${totalAmount.toFixed(2)}</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-dark btn-lg btn-block w-100">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
