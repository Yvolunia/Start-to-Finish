import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Mission extends Component {
  
  // componentDidMount() {
  //   this.loadKid();
  //   this.loadMissions();
  // }

    loadMissions = () => {
      API.getmissions()
        .then(res =>
          this.setState({ missions: res.data, missionName: "", days: "", pointValue: ""})
        .catch(err => console.log(err))
        )
    };
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Jack's Mission List</h1>
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

export default Mission;
