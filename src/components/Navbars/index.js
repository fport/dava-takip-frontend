import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";

const Navbars = () => {
  const deleteItems = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">DavaTakip</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/main">Dava Listele</Nav.Link>
            <Nav.Link href="/add">Dava Ekle</Nav.Link>
          </Nav>
          <Form inline>
            <Link to="/login" style={{ color: "#1FB79B" }}>
              <button onClick={deleteItems}>Logout</button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
