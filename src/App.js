import React from 'react';
import "./App.css"
import {
  Container,
  Collapse,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import SearchPlayer from './SearchPlayer'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      selectedSection: null,
      isOpen: false,
    };
  }

  changeSection = section => {
    this.setState({
      selectedSection: section
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12" sm="12" md="12" lg={{size: 10, offset: 1}} xl={{size: 10, offset: 1}}>
              <Navbar color="faded" dark expand="md">
                <NavbarBrand href="/">PUBG Handbook</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink onClick={() => this.changeSection('searchPlayer')}>Search</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.changeSection('weapons')}>Weapons</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.changeSection('scopes')}>Scopes</NavLink>
                  </NavItem>
                </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
          {
            this.state.selectedSection === 'searchPlayer' ? <SearchPlayer/> : null
          }
        </Container>
      </div>
    );
  }
}
