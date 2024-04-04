import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React from 'react';
import image2 from './images/image2.jpg';


function App() {
  return (
    <>
    <div className="App">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
       <Navbar.Brand target="_blank" href="https://www.apple.com/"><b>Apple Store</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link target ="blank" href="https://discussions.apple.com/welcome?cid=gn-com-community-lp-get_help">contact</Nav.Link>
            <NavDropdown title="Our Products" id="basic-nav-dropdown">
              <NavDropdown.Item  target="blank" href="https://www.apple.com/tn/iphone/">Phone</NavDropdown.Item>
              <NavDropdown.Item target ="blank" href="https://www.apple.com/tn/ipad/">
                Pad
              </NavDropdown.Item>
              <NavDropdown.Item target="blank" href="https://www.apple.com/tn/mac/">Mac</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="blank" href="https://www.apple.com/tn/">
                Others 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<br></br>
<img class="img" src={image2}/>

    <br></br>

    <div className='cards'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPYWvKXg8N9ufRTfPMnH4VyQ7NqjLcNdloZCTdkUrkEIdXRmZbWcs9n6qolGc9MdjtEQ&usqp=CAU" />
      <Card.Body>
        <Card.Title>iPhone</Card.Title>
        <Card.Text>
           Smartphone Apple Aucun besoin de définir un Iphone. Tout le monde connait ces smartphones réputés pour leur design raffiné, leurs appareils photos à double .
        </Card.Text>
        <Button variant="primary" target="_blank" href="https://www.apple.com/tn/iphone/">Show More {'>'} </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxB3l-7yWCGSIBvKMU20YYv65scFhclI_-OxQVyn-d1cbCAnzUEOqI3LUjiZeO0PTjCsg&usqp=CAU" />
      <Card.Body>
        <Card.Title>iPad</Card.Title>
        <Card.Text>
        Des performances exceptionnelles. Des écrans ultra-sophistiqués. Une connectivité sans fil d’une rapidité extrême. Des capacités inédites pour l’Apple Pencil. 
        </Card.Text>
        <Button variant="primary"  target="_blank" href="https://www.apple.com/tn/ipad/">Show More {'>'} </Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFqeHRvSc94MTgVE2lNBizRLOniIfyJMOcw&usqp=CAU" />
      <Card.Body>
        <Card.Title>Mac</Card.Title>
        <Card.Text>
        Le MacBook Pro fait un bond en avant avec les puces M3, M3 Pro et M3 Max. Créées à partir de la technologie de gravure en 3 nanomètres .
        </Card.Text>
        <Button variant="primary" target="_blank" href="https://www.apple.com/tn/mac/">Show More {'>'} </Button>
      </Card.Body>
    </Card>

    </div>
    
    </div>
    <footer>
    <p class ='foot'><i>All rights Reserved@2023</i></p>
    </footer>
    </>
  );
  }

export default App;
