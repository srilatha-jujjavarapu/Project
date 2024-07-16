import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Card.css";
import "../styles/ApptPageStyles.css"
function AppointmentPage() {
    return (
        <div className="container appt">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center h-150">
                        <div className="card-body">
                            <i className="bi bi-person" style={{ fontSize: "2rem" }}></i>
                            <h5 className="card-title mt-2">Where does it Hurt?</h5>
                            <p className="card-text">Areas We Treat</p>
                            <select className="form-select mb-3">
                                <option>Select...</option>
                                {/* Add more options here */}
                            </select>
                            <a href="#" className="btn btn-primary btn-block">
                            Select the areas where it hurts
                            </a>
                        </div>
                    </div>
                </div>
   
  
                <div className="col-md-4 ">
                    <div className="card text-center h-150">
                        <div className="card-body">
                            <i className="bi bi-geo-alt" style={{ fontSize: "2rem" }}></i>
                            <h5 className="card-title mt-2">Find a Location</h5>
                            <p className="card-text">
                            Get directions and parking information
                            </p>
                            <select className="form-select mb-3">
                                <option>Select...</option>
                                {/* Add more options here */}
                            </select>
                            <a href="#" className="btn btn-primary btn-block">
                            View all of our locations
                            </a>
                        </div>
                    </div>
                </div>
  
                <div className="col-md-4">
                    <div className="card text-center h-200">
                        <div className="card-body">
                            <i
                            className="bi bi-calendar-check"
                            style={{ fontSize: "2rem" }}
                            ></i>
                            <h5 className="card-title mt-2">Make an Appointment</h5>
                            <p className="card-text">
                            Let's get you set up with an appointment
                            </p>
                            <a href="#" className="btn btn-primary btn-block">
                            Schedule an Appointment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default AppointmentPage;