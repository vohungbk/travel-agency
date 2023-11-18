import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2"></i>+012 345 6789
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>info@example.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="">
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="">
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0">
            <h1 className="text-primary m-0">
              <i className="fa fa-map-marker-alt me-3"></i>Tourist
            </h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link href="/" className="nav-item nav-link">
                Home
              </Link>
              <Link href="/about" className="nav-item nav-link">
                About
              </Link>
              <Link href="/services" className="nav-item nav-link">
                Services
              </Link>
              <Link href="/package" className="nav-item nav-link">
                Packages
              </Link>

              <div className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">
                  Pages
                </Link>
                <div className="dropdown-menu m-0">
                  <Link href="/destination" className="dropdown-item">
                    Destination
                  </Link>
                  <Link href="/destination" className="dropdown-item">
                    Booking
                  </Link>
                  <Link href="/destination" className="dropdown-item">
                    Travel Guides
                  </Link>
                  <Link href="/destination" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <Link href="" className="btn btn-primary rounded-pill py-2 px-4">
              Register
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
