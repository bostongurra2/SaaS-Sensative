import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Grid, Col, Row  } from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar id="navigation" staticTop collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
          <img id="logo" src={require('./logo.jpg')} />
          </Navbar.Brand>
          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          </Nav>
          </Navbar.Collapse>
          </Navbar>;

          <Grid>
              <Row id="content">
              <Col lg={12}>
              </Col>
              </Row>
            </Grid>;
      </div>
    );
  }
}

export default App;
