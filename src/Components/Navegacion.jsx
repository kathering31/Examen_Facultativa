import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navegacion extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span data-feather="file" />
                  Home
                </Link>
              </li>
              <br />

              <li className="nav-item">
                <Link className="nav-link" to="/Emails">
                  <span data-feather="shopping-cart" />
                  Emails
                </Link>
              </li>
              <br />
              <li class="nav-item">
                <Link className="nav-link" to="/Cliente">
                  <span data-feather="users" />
                  Customers
                </Link>
              </li>
              <br />
              <li className="nav-item">
                <Link className="nav-link" to="/Productos">
                  <span data-feather="layers" />
                  Products
                </Link>
              </li>
              <br />
              <li className="nav-item">
                <Link className="nav-link" to="/Pedidos">
                  <span data-feather="bar-chart-2" />
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navegacion;
