import React, { useState, useEffect } from "react";
import axios from "axios";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Number of products per page

  // Fetch products data from the JSON file using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products'); // Ensure the path matches where your JSON file is stored
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, []);

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
console.log(products);
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Filter Section */}
        <aside className="col-lg-3 mb-4">
          <h5 className="mb-3">Filters</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Warranty Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="brand1"
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
                  value="brand2"
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
                  value="brand3"
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
                      <a href="#">{product.name}</a>
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vero, possimus nostrum!
                    </p>
                    <div className="product-bottom-details">
                      <div className="product-price">
                        <small>${product.oldPrice.toFixed(2)}</small> ${product.newPrice.toFixed(2)}
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
