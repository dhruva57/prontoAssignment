import React, { Component } from 'react';
import Header from './HeaderComponent';
import Users from './UserComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



class Main extends Component {



  constructor(props) {
    super(props);


        this.handleLogin = this.handleLogin.bind(this);
        this.addNewUser = this.addNewUser.bind(this);

    this.state = {
            isLoggedIn : false,
            newUser : '',
            signedUsers : []
        };

  }


      toggleLogin() {
        this.setState({
          isLoggedIn: !this.state.isLoggedIn
        });
        if(isLoggedIn === true)
          alert("Successfully Logged In");
        else
          alert("Successfully Logged Out");
    }

    addNewUser(){
      this.setState({
        signedUsers : this.state.signedUsers.concat([this.newUser])
      });
    }





  render() {



    return (
      <div>
        <Header checkLogin={this.toggleLogin}
        newUser ={this.newUser}
        login={this.state.isLoggedIn}
        users={this.state.signedUsers} 
         />
         {this.addNewUser}
        <div>
            <Switch>
                <Route exact path='/users' component={() => <Users login={this.state.isLoggedIn} users={this.state.signedUsers} />} />} />
                <Redirect to="/users" />
              </Switch>
        </div>

      </div>
    );
  }
}

export default Main;