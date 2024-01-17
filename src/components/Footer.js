import React from "react";

const Footer = () => {
  return (
    <div className=" mt-5 text-center ">
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4  btn btn-outline-dark">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="me-4 btn btn-outline-dark">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="me-4 btn btn-outline-dark">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="me-4 btn btn-outline-dark">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="me-4 btn btn-outline-dark">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="/" className="me-4 btn btn-outline-dark">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{"backgroundColor":" rgba(0, 0, 0, 0.05)"}}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="/">
             Priyanshu Raj Anand
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
