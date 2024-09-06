import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Number of products per page

  // Sample products array (replace with your actual products data)
  const products = [
    { id: 1, image: "https://i.imgur.com/xdbHo4E.png", category: "Women,bag", name: "Women leather bag", oldPrice: 96.0, newPrice: 230.99 },
    { id: 2, image: "https://i.imgur.com/xdbHo4E.png", category: "Women,bag", name: "Women leather bag", oldPrice: 96.0, newPrice: 230.99 },
    { id: 3, image: "https://i.imgur.com/xdbHo4E.png", category: "Women,bag", name: "Women leather bag", oldPrice: 96.0, newPrice: 230.99 },
    { id: 4, image: "https://i.imgur.com/xdbHo4E.png", category: "Women,bag", name: "Women leather bag", oldPrice: 96.0, newPrice: 230.99 },
    { id: 5, image: "https://i.imgur.com/xdbHo4E.png", category: "Women,bag", name: "Women leather bag", oldPrice: 96.0, newPrice: 230.99 },
    { id: 6, image: "https://i.imgur.com/xdbHo4E.png", category: "Women,bag", name: "Women leather bag", oldPrice: 96.0, newPrice: 230.99 },
  ];

  // Calculate the index of the first and last products on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Slice the products array to get only the products for the current page
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Handlers for page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filter Section */}
        <aside className="col-lg-3 mb-4">
          <h5 className="mb-3">Filters</h5>
          <form>
            {/* Category Filter */}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select className="form-select" id="category">
                <option selected>All Categories</option>
                <option value={1}>Electronics</option>
                <option value={2}>Fashion</option>
                <option value={3}>Home Appliances</option>
              </select>
            </div>
            {/* Price Filter */}
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price Range
              </label>
              <input
                type="range"
                className="form-range"
                min={0}
                max={1000}
                id="price"
              />
            </div>
            {/* Brand Filter */}
            <div className="mb-3">
              <label className="form-label">Brand</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand1"
                  id="brand1"
                />
                <label className="form-check-label" htmlFor="brand1">
                  Brand 1
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand2"
                  id="brand2"
                />
                <label className="form-check-label" htmlFor="brand2">
                  Brand 2
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand3"
                  id="brand3"
                />
                <label className="form-check-label" htmlFor="brand3">
                  Brand 3
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Stars</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand1"
                  id="brand1"
                />
                <label className="form-check-label" htmlFor="brand1">
                   <CiStar />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand2"
                  id="brand2"
                />
                <label className="form-check-label" htmlFor="brand2">
                <CiStar /><CiStar />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand3"
                  id="brand3"
                />
                <label className="form-check-label" htmlFor="brand3">
                <CiStar /><CiStar /><CiStar />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand3"
                  id="brand3"
                />
                <label className="form-check-label" htmlFor="brand3">
                <CiStar /><CiStar /><CiStar /><CiStar />
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand3"
                  id="brand3"
                />
                <label className="form-check-label" htmlFor="brand3">
                <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Warranty Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand1"
                  id="brand1"
                />
                <label className="form-check-label" htmlFor="brand1">
                   7 Days
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand2"
                  id="brand2"
                />
                <label className="form-check-label" htmlFor="brand2">
                  1 Month
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue="brand3"
                  id="brand3"
                />
                <label className="form-check-label" htmlFor="brand3">
                  6 Month
                </label>
              </div>
            </div>
            {/* Apply Filter Button */}
            <button type="button" className="btn btn-primary w-100">
              Apply Filters
            </button>
          </form>
        </aside>
        {/* Product Cards Section */}
        <section className="col-lg-9">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {currentProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="product-card">
                  <div className="product-tumb">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h6>
                      <a href="">{product.name}</a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero, possimus nostrum!
                    </p>
                    <div className="product-bottom-details">
                      <div className="product-price">
                        <small>${product.oldPrice.toFixed(2)}</small>${product.newPrice.toFixed(2)}
                      </div>
                      <div className="product-links">
                        30% off
                      </div>
                      <button className="btn btn-dark w-100 mt-2">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mt-4">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePreviousPage} disabled={currentPage === 1}>
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNextPage} disabled={currentPage === totalPages}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Products;