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
  ButtonGroup,
  Button,
  Input
} from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isSelectedQueue: [false, false, false, false, false, false],
      isSelectedServer: [false, false, false, false, false, false, false],
      selectedQueue: null,
      selectedServer: null
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setQueue(which, type, selected) {
    if (type === 'server') {
      let changedSelection = [false, false, false, false, false, false, false];
      changedSelection[which] = true;
      this.setState({
        isSelectedServer: changedSelection,
        selectedServer: selected
      })
    }
    if (type === 'queue') {
      let changedSelection = [false, false, false, false, false, false];
      changedSelection[which] = true;
      this.setState({
        isSelectedQueue: changedSelection,
        selectedQueue: selected
      })
    }
  }

  searchPlayer = () => {
    if (this.state.selectedQueue === null || this.state.selectedServer === null) {
      return null;
    }
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
                    <NavLink href="#">Weapons</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Scopes</NavLink>
                  </NavItem>
                </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col className="Search-selection" xs="12" sm="12" md="12" lg={{size: 10, offset: 1}}
                 xl={{size: 10, offset: 1}}>
              <ButtonGroup>
                <Button active={this.state.isSelectedServer[0]}
                        onClick={() => this.setQueue(0, 'server', 'na')}>NA</Button>
                <Button active={this.state.isSelectedServer[1]}
                        onClick={() => this.setQueue(1, 'server', 'eu')}>EU</Button>
                <Button active={this.state.isSelectedServer[2]}
                        onClick={() => this.setQueue(2, 'server', 'as')}>AS</Button>
                <Button active={this.state.isSelectedServer[3]}
                        onClick={() => this.setQueue(3, 'server', 'oc')}>OC</Button>
                <Button active={this.state.isSelectedServer[4]}
                        onClick={() => this.setQueue(4, 'server', 'sa')}>SA</Button>
                <Button active={this.state.isSelectedServer[5]}
                        onClick={() => this.setQueue(5, 'server', 'sea')}>SEA</Button>
                <Button active={this.state.isSelectedServer[6]}
                        onClick={() => this.setQueue(6, 'server', 'krjp')}>KRJP</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col className="Search-selection" xs="12" sm="12" md="12" lg={{size: 10, offset: 1}}
                 xl={{size: 10, offset: 1}}>
              <ButtonGroup>
                <Button active={this.state.isSelectedQueue[0]} onClick={() => this.setQueue(0, 'queue', 'solo')}>Solo
                  TPP</Button>
                <Button active={this.state.isSelectedQueue[1]} onClick={() => this.setQueue(1, 'queue', 'solo-fpp')}>Solo
                  FPP</Button>
                <Button active={this.state.isSelectedQueue[2]} onClick={() => this.setQueue(2, 'queue', 'duo')}>Duo
                  TPP</Button>
                <Button active={this.state.isSelectedQueue[3]} onClick={() => this.setQueue(3, 'queue', 'duo-fpp')}>Duo
                  FPP</Button>
                <Button active={this.state.isSelectedQueue[4]} onClick={() => this.setQueue(4, 'queue', 'squad')}>Squad
                  TPP</Button>
                <Button active={this.state.isSelectedQueue[5]} onClick={() => this.setQueue(5, 'queue', 'squad-fpp')}>Squad
                  FPP</Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col className="Search-selection" xs="12" sm="12" md="12" lg={{size: 10, offset: 1}}
                 xl={{size: 6, offset: 3}}>
              <Input placeholder="Type in name of the player you search for "/>
              <Button onClick={this.searchPlayer}>Search</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
