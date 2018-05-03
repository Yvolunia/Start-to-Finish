import React, {Component } rom 'react';
import Button from '../../components/Button';
import Missions from '../../components/Missions';
import Nav from '../../components/nav';
import Scorebox from '../../components/Scorebox';

class HomeScreen extends Component{
  state = {
    username: [],
    password: "",
    first name: "",
    last name: "",
    email: "",
    about yourself: "",
  };

  componentDidMount() {
    this.loadHomeScreen();
  }

  loadHomeScreen = () => {
    API. getHomescreen()
    .then(res =>
      this.setState({username: res.date, password: "", first name: "", last name: "", email: "", about yourself: ""})
      )
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.password && this.state.first name){
      API.saveHomeScreen({
        password: this.state.password,
        first name: this.state.first name,
        last name: this.state.last name,
        email: this.state.email,
        about yourself: this.state.about yourself
      })

        .then(res => this.loadHomeScreen())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (  
        <Container fluid>
                    <row>
                        <col size = sm-8 col-sm-offset-2 text>
                            <h1>Login &amp; Register Forms<h1>
                              <h3>
                                Start-2-Finish is an goal oriented application that allows parents to be able to set weekly goals for there
                                children. Allowing the children to be able to work towards a weekly goal, that results in rewards at the end of the week. If the goals are not met by the end of the week, the task will reset and the child will have another week to obtain the reward from the tasks. 
                              <h3>
      )
  }
}