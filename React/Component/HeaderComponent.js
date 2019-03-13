import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpen2: false
        };
    }



    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }



    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    toggleModal2() {
        this.setState({
          isModalOpen2: !this.state.isModalOpen2
        });
    }

    handleLogin(event) {
        this.toggleModal();

        if(this.inputUsername && this.inputPassword){
            const userData = this.props.users.filter((user) => user.username === this.inputUsername)[0];
            if(userData){
                if(userData.password === this.inputPassword){
                    alert("Username: " + this.username.value + " Password: " + this.password.value
                + " Remember: " + this.remember.checked);
                    this.props.checkLogin();
                }
                else
                alert("Wrong Password");

            }
            else
                alert("Authentication failed");
        }
        else
            alert("First Sign Up");
        event.preventDefault();

    }

handleuser = () => {
    var user ={};
    user.username = this.inputUsername;
    user.password = this.inputPassword
    this.props.signedUsers(user);            
}

    handleLogon(event) {
        this.toggleModal2();
        if(this.inputUsername && this.inputPassword)
            alert("Username: " + this.inputUsername.value + " Password: " + this.inputPassword.value);
        else
            alert("Invalid username or password");
        event.preventDefault();

    }

    render() {


        const buttonText = () => {
            
            if(props.login === true)
                return(
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.props.toggleLogin}><span className="fa fa-sign-in fa-lg"></span> Logout</Button>
                        </NavItem>
                    </Nav>
                );
            else
                return(
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                        <NavItem>
                            <Button outline onClick={this.toggleModal2}>Sign Up</Button>
                        </NavItem>
                    </Nav>
                    );
                
        }

        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <Nav navbar>
                            <NavItem>
                                <NavLink  to='/users'>Users</NavLink>
                            </NavItem>
                        </Nav>

                            {buttonText}
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                         <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>Sign Up</ModalHeader>
                    <ModalBody>
                         <Form onSubmit={this.handleLogon}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.inputUsername = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.inputPassword = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Sign Up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


export default Header;