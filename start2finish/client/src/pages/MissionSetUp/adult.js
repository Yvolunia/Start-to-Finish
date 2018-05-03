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
    missionName: ""
  };

  // componentDidMount() {
  //   this.loadKid();
  //   this.loadMissions();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
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
            </Jumbotron>

            <form>
            <Input
              value={this.state.missionName}
              onChange={this.handleInputChange}
              name="missionName"
              placeholder="Mission (required)"
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
