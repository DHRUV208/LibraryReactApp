import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <ul className="list-insline text-center">
              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-twitter"></i>
                  </span>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-facebook"></i>
                  </span>
                </a>
              </li>

              <li className="list-inline-item">
                <a href="#">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-github"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p className="copyright text-muted">Copyright @ Zeeve 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
