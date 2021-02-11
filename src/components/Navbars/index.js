import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";

const Navbars = () => {
  const deleteItems = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">DavaTakip</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/main">Dava Listele</Nav.Link>
          <Nav.Link href="/add">Dava Ekle</Nav.Link>
        </Nav>
        <Form inline>
          <Link to="/login" style={{ color: "#1FB79B" }}>
            <button onClick={deleteItems}>Logout</button>
          </Link>
          {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
          {/* <Button variant="outline-info">Search</Button> */}
        </Form>
      </Navbar>
    </>
  );
};

export default Navbars;
