import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Kids extends Component {
// componentDidMount() {
//   this.loadKids();
// }

loadKids = () => {
  API.getKids()
    .then(res =>
      this.setState({ kids: res.data, missionName: ""})
    .catch(err => console.log(err))
    )
};

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Mission List</h1>
            </Jumbotron>
            {this.state.missionName.length ? (
              <List>
                {this.state.missionName.map(missionName => (
                  <ListItem key={missionName._id}>
                    <Link to={"/kids/" + missionName._id}>
                      <strong>
                        {missionName}
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

export default Kids;
