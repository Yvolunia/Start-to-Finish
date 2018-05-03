import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Adult extends Component {
  state = {
    kid: [],
    userName: "",
    reward: "",
    missions: [],
    missionName: "",
    days: "",
    pointValue: ""
  };

  componentDidMount() {
    this.loadKid();
    this.loadMissions();
  }

  loadKid = () => {
    API.getkids()
      .then(res =>
        this.setState({ kid: res.data})
      .catch(err => console.log(err))
      )
    };
  

  deleteKid = id => {
    API.deletekids(id)
      .then(res => this.loadKid())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleKidSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.reward) {
      API.savekids({
        userName: this.state.userName,
        reward: this.state.reward
      })
        .then(res => this.loadKid())
        .catch(err => console.log(err));
    }
  };

    loadMissions = () => {
      API.getmissions()
        .then(res =>
          this.setState({ missions: res.data, missionName: "", days: "", pointValue: ""})
        .catch(err => console.log(err))
        )
    };
  
    deleteMissions = id => {
      API.deletemissions(id)
        .then(res => this.loadMissions())
        .catch(err => console.log(err));
    };
  
    handleMissionSubmit = event => {
      event.preventDefault();
      if (this.state.missionName && this.state.days && this.state.pointValue) {
        API.savemissions({
          userName: this.state.missionName,
          days: this.state.days,
          pointValue: this.state.pointValue
        })
          .then(res => this.loadMissions())
          .catch(err => console.log(err));
      }
    };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>Add Missions for the Week</h2>
              <h3>Add your child's name and reward</h3>
              <h3>Next add the missions, number of days for each mission, and point value</h3>
              <p>Total Points for all missions should add up to 100 points</p>
            </Jumbotron>
            <form>
              <Input
                value={this.state.userName}
                onChange={this.handleInputChange}
                name="kid"
                placeholder="Kid Name (required)"
              />
              <Input
                value={this.state.reward}
                onChange={this.handleInputChange}
                name="reward"
                placeholder="Reward (required)"
              />
              <FormBtn
                disabled={!(this.state.userName && this.state.reward)}
                onClick={this.handleKidSubmit}
              >
                Submit Reward
              </FormBtn>
            </form>
            <form>
            <Input
              value={this.state.missionName}
              onChange={this.handleInputChange}
              name="mission"
              placeholder="Mission (required)"
            />
            <Input
              value={this.state.days}
              onChange={this.handleInputChange}
              name="Days"
              placeholder="Days (number of days (<8) to repeat activity)"
            />
            
            <Input
            value={this.state.pointValue}
            onChange={this.handleInputChange}
            name="pointValue"
            placeholder="Points (number <101)"
           />
            <FormBtn
              disabled={!(this.state.userName && this.state.reward)}
              onClick={this.handleMissionSubmit}
            >
              Submit Mission
            </FormBtn>
          </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Mission List</h1>
            </Jumbotron>
            {this.state.missions.length ? (
              <List>
                {this.state.missions.map(missions => (
                  <ListItem key={missions._id}>
                    <Link to={"/adults/" + missions._id}>
                      <strong>
                        {missions.missionName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMissions(missions._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Adult;
