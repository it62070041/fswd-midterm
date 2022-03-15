import { Navbar, Container, Nav } from "react-bootstrap";

function Navbarr() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="/">Blogger</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="category">Category</Nav.Link>
              <Nav.Link href="author">Author</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
