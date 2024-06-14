import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Modal, Offcanvas } from "react-bootstrap";
import { useParams } from "react-router-dom";

function View() {
  const [dish, setDish] = useState({});
  const { id } = useParams();
  console.log(id);
  const [show, setShow] = useState(false);
  const [showCanvas, setCanvasShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(dish);

  const handleCanvasClose = () => setCanvasShow(false);
  const handleCanvasShow = () => setCanvasShow(true);
  useEffect(() => {
    if (localStorage.getItem("allDishes")) {
      const allDishes = JSON.parse(localStorage.getItem("allDishes"));
      setDish(allDishes.find((item) => item.id == id));
    }
  }, []);

  return (
    <>
      <div className="view">
        <div className="viewimg">
          <img src={dish.photograph} alt="" />
        </div>

        <div className="viewp">
          <p className="fname">{dish.name}</p>
          <p>
            Location : <span className="floc">{dish.neighborhood}</span>
          </p>
          <p>
            Address : <span className="fad">{dish.address}</span>
          </p>
          <p>
            Cuisine : <span className="fcuisine">{dish.cuisine_type}</span>
          </p>
          <button
            onClick={handleCanvasShow}
            className="btn btn-primary"
            style={{ marginRight: "10px" }}
          >
            Reviews
          </button>
          <button className="btn btn-primary" onClick={handleShow}>
            Operating Hours
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Moday</h6>
          <p className="time">{dish?.operating_hours?.Monday}</p>

          <h6>Tuesday</h6>
          <p className="time">{dish?.operating_hours?.Tuesday}</p>

          <h6>Wednesday</h6>
          <p className="time">{dish?.operating_hours?.Wednesday}</p>

          <h6>Thursday</h6>
          <p className="time">{dish?.operating_hours?.Thursday}</p>

          <h6>Friday</h6>
          <p className="time">{dish?.operating_hours?.Friday}</p>

          <h6>Saturday</h6>
          <p className="time">{dish?.operating_hours?.Saturday}</p>

          <h6>Sunday</h6>
          <p className="time">{dish?.operating_hours?.Sunday}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ///////////////////////////////////////////////// */}

      <Offcanvas show={showCanvas} onHide={handleCanvasClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reviews</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {dish?.reviews?.map((person) => (
            <div className="review">
              <div className="person d-flex align-items-centerq">
                {/* <i class="fa-solid fa-user" style={{ marginRight: "10px" }}></i> */}
                <img
                  src="https://i.pinimg.com/564x/d5/b0/4c/d5b04cc3dcd8c17702549ebc5f1acf1a.jpg"
                  alt=""
                  width={"70px"}
                  height={"70px"}
                />
                <p className="n">{person.name}</p>
              </div>
              <p className="rate">
                Rating : <span>{person.rating}</span>
              </p>
              <p className="date">Date : {person.date}</p>
              <p className="p">{person.comments}</p>
            </div>
          ))}

          {/* <div className="person d-flex">
            <i class="fa-solid fa-user" style={{ marginRight: "10px" }}></i>
            <p>Riyaz</p>
          </div>
          <p>
            Rating :<span>4</span>
          </p>
          <p>Date : October 26, 2021</p>
          <p>
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nam,
            facere voluptas ratione commodi rerum possimus at debitis illo
            expedita voluptatibus. Eum reiciendis, impedit molestiae modi beatae
            repellat dolorum est"
          </p> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default View;
