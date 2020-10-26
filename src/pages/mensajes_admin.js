import React from "react";
import "../style/style.css";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
class Mensajes_admin extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <>
          <Nav className="justify-content-center " activeKey="/devolver">
            <Nav.Item>
              <Nav.Link href="botones_mensajes_admin " className="encabezado">
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
                href="buscar_admin "
                eventKey="Busqueda"
                className="encabezado"
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

          <Nav className="justify-content-end" href="/Perfil">
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                className="perfil-enlace"
                href="Perfil"
              ></Nav.Link>
            </Nav.Item>
            <div></div>
            <Nav.Item></Nav.Item>
          </Nav>
        </>
        <h2 className="mensajes_admin">Mensajes</h2>
        <div>
          <Card>
            <Nav.Link className="card_mensaje2_admin" href="mensajes_admi">
              <Card className="mensajes_admin">
                <h1>Camila Arroyave</h1>
                Me gusto la pagina
              </Card>
            </Nav.Link>
            <Nav.Link href="mensajes_admi" className="card_mensaje1_admin">
              <Card className="mensajes_admin">
                <h1>Andres Agudelo</h1>
                Deberían mejorar
              </Card>
            </Nav.Link>
          </Card>
        </div>
      </div>
    );
  }
}
export default Mensajes_admin;
