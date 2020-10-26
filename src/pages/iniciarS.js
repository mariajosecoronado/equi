import React from "react";
import "../style/style.css";
import { Form, Button } from "react-bootstrap";

class iniciarS extends React.Component {
  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <div className="col">
            <img
              className="d-block w-50"
              src="https://raw.githubusercontent.com/Saracas-022/holamundo/main/logotipo.jpeg"
              alt="logo"
              width="100"
            />

            <h1 className="titulo-IR">
              BIENVENID@ A COOK TO WORK <br />
              INICIE SESIÓN AQUÍ
            </h1>
            <div>
              <Form>
                <Form.Group
                  controlId="formBasicEmail"
                  className="campo-iniciarS"
                >
                  <Form.Control type="email" placeholder="Correo:" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="campo-iniciarS"
                >
                  <Form.Control type="password" placeholder="Contraseña:" />
                </Form.Group>
                <p>
                  <a href="/olvidaste_contraseña" className="O-contraseña">
                    ¿Has olvidado tu contraseña?
                  </a>
                </p>

                <Button href="/inicio" className="boton-I">
                  INICIAR SESIÓN COMO USUARIO
                </Button>
                <br />
                <Button href="/inicio_admin" className="boton-I">
                  INICIAR SESIÓN COMO ADMINISTRADOR
                </Button>
                <br />
                <Button href="/registro" className="boton-I">
                  REGISTRARSE
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default iniciarS;
