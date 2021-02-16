import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
import "./style.css";

const Navbars = () => {
  const logoutBaby = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar className="navbar" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand className="link" href="/">
          DavaTakip
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="link" href="/main">
              Dava Listele
            </Nav.Link>
            <Nav.Link className="link" href="/add">
              Dava Ekle
            </Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/login">
              <button className="logout link" onClick={logoutBaby}>
                Çıkış Yap
              </button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
