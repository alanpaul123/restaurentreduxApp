import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchDishes } from "../Redux/slices/dishSlice";
import { Spinner } from "react-bootstrap";
import { Pagination } from "react-bootstrap";

function Home() {
  const dispatch = useDispatch();
  const { allDishes, error, loading } = useSelector(
    (state) => state.dishReducer
  );
  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the total number of pages
  const totalPages = Math.ceil(allDishes?.length / itemsPerPage);

  // Get current page items
  const presentItems = allDishes?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage === 1 ? currentPage * itemsPerPage : undefined
  );

  // Handling page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="dd">
      {/* <div className="hero">
        <div className="herop">
          <p >
            A restaurant should remove you from the mundane <br /> burdens of
            everyday life and transport you to another world
          </p>
          <button>Learn More</button>
        </div>
      </div> */}
      <div className="page">
        {loading ? (
          <div className="text-center mt-5 fw-bolder">
            <Spinner animation="border" variant="primary" /> Loading...
          </div>
        ) : (
          <div className="boxes">
            {presentItems?.length > 0 ? (
              presentItems?.map((dish) => (
                <div className="box">
                  <img src={dish.photograph} alt="" />
                  <p className="bp">{dish.name}</p>
                  <p>
                    Cuisine : <span>{dish.cuisine_type}</span>
                  </p>

                  <p>
                    Neighbourhood: <span>{dish.neighborhood}</span>
                  </p>
                  <div className="bbb">
                    <Link className="btn btn-success" to={`/${dish?.id}/view`}>
                      View More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="fw-bolder text-center mt-5 mb-5 text-danger">
                Product Not Found
              </div>
            )}
          </div>
        )}
      </div>

      <Pagination className="d-flex justify-content-center mt-5 mb-5">
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default Home;
