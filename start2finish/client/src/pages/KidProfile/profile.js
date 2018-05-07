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
    profiles: [],
    kidName: "",
    parentID: ""
  };

  componentDidMount() {
    this.loadProfiles("5aedeb70832afe179eebd365"); //Remove hard coded profile//
  }

  loadProfiles = id => {
    API.getProfile(id)
      .then (res => {this.setState({profiles: res.data.profiles, parentID: res.data._id }, function() {console.log(this.state.profiles)})}
    )
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
      API.updateProfile("5aedeb70832afe179eebd365", {
        //Remove hard code id//
        kidName: this.state.kidName
      })
        .then(res => this.loadProfiles("5aedeb70832afe179eebd365")) //Remove hard coded profile//
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
                onClick={this.handleProfileSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>

          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current Kid List</h1>
            </Jumbotron>
            {this.state.profiles ? (
              <List>
                {this.state.profiles.map(profile => (
                  <ListItem key={profile.kidName}>
                    <Link to={"/profiles/" + this.state.parentID}>
                      <strong>
                        {profile.kidName}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteProfiles(kidName._id)} /> */}
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

export default Profiles;
