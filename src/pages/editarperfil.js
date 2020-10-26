import React from "react";
import "../style/style.css";

import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";;

class editarPerfil extends React.Component {
  _Alerta()  {
    Swal.fire("Tus cambios han sido guardados");
  }
  render() {
    return (
      <div>
        <Nav className="justify-content-center " activeKey="/devolver">
            <Nav.Item>
              <Nav.Link href="perfil" eventKey="link-1" className="encabezado">
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
            <Nav.Link href="buscar" eventKey="Busqueda" className="encabezado ">
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
            src="https://elhombreconfuso.files.wordpress.com/2010/11/alejandrosalgueirosexyhunk01.jpg"
            alt="logo"
            width="130"
            height="150"
          />
        </div><br></br>
        <div className="unotitulo">
          <h6> Alejandro Pérez </h6>
        </div><br></br>
        <Button href="/editarperfil" className="boton-I">
          Subir nueva foto
        </Button><br></br>
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Edita tu nombre"></input>
        </div><br></br>

      
        <div className="input">
          <BsFillChatQuoteFill />

          <input placeholder="Edita tu correo"></input>
        </div>
        <br></br>
        <Button onClick={this._Alerta} href="/Perfil" className="boton-I">
          Guardar cambios
        </Button><br></br>

        <footer className="header">
          CONTÁCTENOS
          <button className="button">
            {" "}
            <Nav.Link href="/mensaje" className="black">
              CLICK AQUÍ
            </Nav.Link>{" "}
          </button>
          <Nav.Link href="/mensaje" className="black"></Nav.Link>{" "}
        </footer>
      </div>
    );
  }
}

export default editarPerfil;
