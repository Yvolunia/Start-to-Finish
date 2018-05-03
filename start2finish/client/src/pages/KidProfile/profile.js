import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Kid extends Component {
  state = {
    userName: "",
    reward: ""
  };

  componentDidMount() {
    this.loadKid();
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h3>Add your child's name and reward</h3>
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
                Submit Profile
              </FormBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Kid List</h1>
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

export default Kid;
