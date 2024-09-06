import React from 'react';

const Home = () => {
  return (
    <div className="container">

      {/* Banner Section */}
      <section className="banner my-4">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Banner"
          className="img-fluid rounded"
        />
      </section>

      {/* Categories Section */}
      <section className="categories my-4">
        <h2 className="mb-3">Categories</h2>
        <div className="row row-cols-2 row-cols-md-4 g-3">
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Category 1"
              />
              <div className="card-body">
                <h5 className="card-title">Category 1</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Category 2"
              />
              <div className="card-body">
                <h5 className="card-title">Category 2</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Category 3"
              />
              <div className="card-body">
                <h5 className="card-title">Category 3</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Category 4"
              />
              <div className="card-body">
                <h5 className="card-title">Category 4</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products my-4">
        <h2 className="mb-3">Featured Products</h2>
        <div className="row row-cols-2 row-cols-md-4 g-3">
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">$29.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Product 2"
              />
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">$49.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Product 3"
              />
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">$19.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card border-0 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Product 4"
              />
              <div className="card-body">
                <h5 className="card-title">Product 4</h5>
                <p className="card-text">$39.99</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="d-flex justify-content-between align-items-center py-3">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
        <div>
          <a href="#" className="me-2">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
