import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetDatos } from "./../Services/Datosemails";

class Emails extends Component {
  state = {
    Datos: GetDatos()
  };

  render() {
    return (
      <div className="kat">
        <br />
        <ul className="list-group">
          {this.state.Datos.map(Datos => (
            <Link
              to={`/Emails/${Datos.id}`}
              key={Datos.id}
              className="list-group-item"
            >
              <img className="imagen" src={Datos.foto} />
              {Datos.first_name}
              {Datos.last_name}
              {Datos.date}
              <br />
              {Datos.email}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Emails;
