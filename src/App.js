import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navegacion from "./Components/Navegacion";
import Menu from "./Components/Menu";
import Cliente from "./Components/Cliente";
import Productos from "./Components/Productos";
import Emails from "./Components/Emails";
import Pedidos from "./Components/Pedidos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <Menu />
        </div>

        <Navegacion />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Switch>
            <Route path="/Cliente" component={Cliente} />
            <Route path="/Productos" component={Productos} />
            <Route path="/Emails" component={Emails} />
            <Route path="/Pedidos" component={Pedidos} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
