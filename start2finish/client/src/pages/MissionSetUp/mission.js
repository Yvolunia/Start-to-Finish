import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Missions extends Component {
  state = {
    missions: [],
    parentID: "",
    kidName: "",
    missionName: ""
  };

  componentDidMount() {
    API.getProfile(this.props.match.params.id)
      .then(res => this.setState({ profiles: res.data }))
      .catch(err => console.log(err));
  }

 loadMission = id => {
    API.getMissions(id)
      .then(res => {
        this.setState(res.data, {missionName: ""})
      })
      .catch(err => console.log(err));
  }; 

  // deleteMission = id => {
  //   API.deleteMission(id)
  //     .then(res => this.loadMissions())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleMissionSubmit = event => {
    event.preventDefault();
    console.log ("was clicked");
    {
      API.updateMission("5aedeb70832afe179eebd366", {
        //Remove hard code id//
        mission: this.state.missionName
      })
        .then(res => this.loadMissions("5aedeb70832afe179eebd366")) //Remove hard coded profile//
        .catch(err => console.log(err));
    }
  };
 

  render() {
    const { state: kidProfile } = this.props.location;
    const { kidName, missions } = kidProfile;

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h2>{kidName}'s Missions</h2>
            </Jumbotron>

            <form>
            <Input
              value={this.state.missionName}
              onChange={this.handleInputChange}
              name="missionName"
              placeholder="Mission"
            />
            <FormBtn
              disabled={!(this.state.missionName)}
              onClick={this.handleMissionSubmit}
            >
              Submit Mission
            </FormBtn>
          </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h2>Current Mission List</h2>
            </Jumbotron>
            {console.log( this.state.missions)}
            {this.state.missions.length ? (
              <List>
                {this.state.missions.map(mission => (
                  <ListItem key={kidName.missionName}>
                    {/* <DeleteBtn onClick={() => this.deleteMissions(missionName._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          <Col size="md-4">
            <Link to="/profile">← Back to Kids</Link>
          </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Missions;
