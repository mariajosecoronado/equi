import React from "react";
import "../style/style.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";

class listaDulce extends React.Component {
  render() {
    return (
      <div>
        <>
          <Nav className="justify-content-center " activeKey="/home">
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                className="encabezado"
                href="./inicio"
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
                href="buscar"
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
        </>

        <br></br>
        <CardDeck>
          <Nav.Link className="black" href="recetaDulce">
            <Card>
              <Card.Title>RECETAS DULCES</Card.Title>
              <Card.Img
                variant="top"
                src="https://saposyprincesas.elmundo.es/wp-content/uploads/2019/04/golosinas-caseras-que-parecen-oreo.jpg"
              />
            </Card>
          </Nav.Link>
          <br></br>
          <Nav.Link className="black" href="recetaDulce">
            <Card>
              <Card.Title>RECETAS DULCES</Card.Title>
              <Card.Img
                variant="top"
                src="https://buenavibra.es/wp-content/uploads/2019/01/bigstock-churros-dulces-postres-cosas-dulces-1170x600.jpg"
              />
            </Card>
          </Nav.Link>
          <br></br>
          <Nav.Link className="black" href="recetaDulce">
            <Card>
              <Card.Title>RECETAS DULCES</Card.Title>
              <Card.Img
                variant="top"
                src="https://truffle-assets.imgix.net/1t1bxm43v4e3_7ffgxAJg64K8UAwOimWYya_twix-caseros_landscapeThumbnail_es.jpeg"
              />
            </Card>
          </Nav.Link>
        </CardDeck>
        <br></br>
        <CardDeck>
          <Nav.Link className="black" href="recetaDulce">
            <Card>
              <Card.Title>RECETAS DULCES</Card.Title>
              <Card.Img
                variant="top"
                src="https://recetasdeisabel.com/wp-content/uploads/2017/05/Dulces-y-postres-de-vainilla-fa%CC%81ciles-de-hacer-6-860-X-573.jpg"
              />
            </Card>
          </Nav.Link>
          <br></br>
          <Nav.Link className="black" href="recetaDulce">
            <Card>
              <Card.Title>RECETAS DULCES</Card.Title>
              <Card.Img
                variant="top"
                src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/bolitas-dulces-con-leche-condensada-trufas-de-leche-en-polvo.jpg"
              />
            </Card>
          </Nav.Link>
          <br></br>
          <Nav.Link className="black" href="recetaDulce">
            <Card>
              <Card.Title>RECETAS DULCES</Card.Title>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/originals/0b/a1/56/0ba156a87b330fc6cb58b5a8b8ca0fb1.jpg"
              />
            </Card>
          </Nav.Link>
        </CardDeck>
        <br></br>
        <footer className="header">
          CONTÁCTENOS
          <button className="button">
            {" "}
            <Nav.Link href="/mensaje" className="black">
              CLICK AQUÍ
            </Nav.Link>{" "}
          </button>
        </footer>
      </div>
    );
  }
}

export default listaDulce;
