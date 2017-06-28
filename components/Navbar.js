import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button } from 'react-bootstrap';


export class SidebarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        }
    }

    toggle() {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }

    render() {
        let text = this.state.isLoggedIn ? 'Logged in' : 'Not logged in';

        return (
            <div className="col-xs-12 col-sm-3 sc-sidebar" onClick={() => this.toggle()}>
                <h3>{ text }</h3>
            </div>
        );
    }
}

//export class Navbar extends React.Component {
const navbarInstance = (

<div>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"><ButtonToolbar>
      <Button bsSize="small">Login</Button>
    </ButtonToolbar></NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

<div className="row">
    <div className="col-xs-12 col-sm-offset-1 col-sm-7 sc-content">
        <h3>Content</h3>
    </div>
    <SidebarComponent/>
</div>

</div>
);

let mountNode = document.getElementById('app');

ReactDOM.render(navbarInstance, mountNode);


    // constructor(props){
    //     super(props)
        
    //     this.state = {
    //         loggedIn: false,
    //         prime: false
    //     }
    // }

    // render(){
    //     return 
    //         //To be continued...
    // }