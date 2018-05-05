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
    reward: "",
    missionName: ""
  };

  // componentDidMount() {
  //   this.loadMissions();
  // }

  loadMissions = () => {
    API.getMissions()
      .then(res =>
        this.setState(res.data, {reward: "", missionName: ""})
      .catch(err => console.log(err))
      )
  };

  deleteMission = id => {
    API.deletemission(id)
      .then(res => this.loadMissions())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    handleMissionSubmit = event => {
      event.preventDefault(); {
        API.savemissions({
          reward: this.state.reward,
          missionName: this.state.missionName
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
            </Jumbotron>

            <form>
            <Input
              value={this.state.reward}
              onChange={this.handleInputChange}
              name="reward"
              placeholder="Reward"
            />
            <Input
              value={this.state.missions}
              onChange={this.handleInputChange}
              name="missionName"
              placeholder="Mission"
            />
            <FormBtn
              disabled={!(this.state.reward && this.state.missionName)}
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
            {this.state.missionName.length ? (
              <List>
                {this.state.missionName.map(missionName => (
                  <ListItem key={missionName._id}>
                    <Link to={"/missions/" + missionName._id}>
                      <strong>
                        {missionName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteMissions(missionName._id)} />
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

export default Missions;
