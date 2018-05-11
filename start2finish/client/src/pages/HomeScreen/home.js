import React, {Component } rom 'react';
import Button from '../../components/Button';
import Missions from '../../components/Missions';
import Nav from '../../components/nav';
import Scorebox from '../../components/Scorebox';

render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Mission List</h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Home;
