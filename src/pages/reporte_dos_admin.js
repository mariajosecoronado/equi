import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";

class reporte_dos_admin extends React.Component {
  _Alert() {
    Swal.fire("Esta publicación no ha sido reportada");
  }
  render() {
    return (
      <div>
        <Nav className="justify-content-center " activeKey="/home">
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              className="encabezado"
              href="./recetas_reportadas_admin"
            >
              <h1>
                <BsArrowLeft />
              </h1>
            </Nav.Link>
          </Nav.Item>

          <img
            className="icon-p"
            src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
            alt="logo"
            width="200"
            height="150"
          />

          <Nav.Item>
            <Nav.Link
              href="buscar_admin"
              eventKey="Busqueda"
              className="encabezado "
            >
              <h1>
                {" "}
                <BsSearch />{" "}
              </h1>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item></Nav.Item>
        </Nav>

        <div className="fotoperfil">
          <img
            className="fotoperfil"
            src="https://www.lapi.com.mx/image.ashx?s=57067&im=115321&t=p"
            alt="logo"
            width="130"
            height="150"
          />
        </div>

        <div className="unotitulo">
          <h6> Valeria Gómez </h6>
        </div>
        <div className="tituloR">
          <h6> Recetas reportadas</h6>
        </div>
        <div className="public-flex">
          <Card style={{ width: "12rem" }}>
            <Card.Img
              width="50"
              height="100"
              src="https://recetasfacil.online/wp-content/uploads/2018/12/Recetas-f%C3%A1ciles-de-pollo-para-ni%C3%B1os-e1544662062923.jpg"
            />

            <Card.Body>
              <Card.Title>Rollos de Pollo</Card.Title>

              <Button onClick={this._Alert} className="botonR1">
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default reporte_dos_admin;
