import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Profiles extends Component {
  state = {
    kidName: "",
  };

  componentDidMount() {
    this.loadProfiles("5aedeb70832afe179eebd365");
  }

  loadProfiles = id => {
    API.getProfile(id)
      .then(res => console.log(res.data.profiles))
      .catch(err => console.log(err));
    };
  

  deleteProfile = id => {
    API.deleteProfile(id)
      .then(res => this.loadProfiles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleProfileSubmit = event => {
    event.preventDefault();
    console.log ("was clicked");
    {
      API.saveProfile({
        kidName: this.state.kidName
      })
        .then(res => this.loadProfiles())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h3>Add Your Kids</h3>
            </Jumbotron>
            <form>
              <Input
                value={this.state.kidName}
                onChange={this.handleInputChange}
                name="kidName"
                placeholder="Kid Name (required)"
              />
          
              <FormBtn
                disabled={!(this.state.kidName)}
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
            {/* {this.state.kidName.length ? (
              <List>
                {this.state.kidName.map(kidName => (
                  <ListItem key={kidName._id}>
                    <Link to={"/profiles/" + kidName._id}>
                      <strong>
                        {kidName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProfiles(kidName._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profiles;
