import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
      <h1 className="text-center" style={{ marginTop: "5%" }}>
      1144311 Computational Mathematics
      </h1>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>

        <Col sm="6">
          <div className="text-center">
            <Row>
              <Col sm="6">
              <Card style={{backgroundColor: ' #f6d327 ',backgroundImage:  'linear-gradient(315deg, #f6d327 0%, #fb7ba2 74%)'}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 1</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Basic Computing</h4>
                  </CardText>
                 
                    <Button onClick={()=>{nextPage("BasicComputing")}}color="danger">
                      <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                    </Button>
                  
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: ' #f6d327 ',backgroundImage:  'linear-gradient(315deg, #f6d327 0%, #fb7ba2 74%)'}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 2</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Linear Equations</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("LinearEquations")}} color="danger">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>

            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: ' #fce043 ',backgroundImage:  'linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)'}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 3</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Interpolation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("Interpolation")}} color="danger">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: ' #fce043 ',backgroundImage:  'linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)'}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 4</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Differentiation</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("differentiation")}} color="danger">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>


            <Row className="text-center" style={{ marginTop: "20px" }}>
              <Col sm="6">
                <Card style={{backgroundColor: ' #fce043 ',backgroundImage:  'linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)'}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 5</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Integration</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("integration")}} color="danger">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>

              <Col sm="6">
                <Card style={{backgroundColor: ' #fce043 ',backgroundImage:  'linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)'}}>
                  <CardTitle>
                    <h3 style={{ marginTop: "10px" }}>บทที่ 6</h3>
                  </CardTitle>
                  <CardText>
                    <h4>Root-finding</h4>
                  </CardText>
                  <Button onClick={()=>{nextPage("Rootfinding")}} color="danger">
                    <h3 style={{ marginTop: "10px" }}>เริ่ม</h3>
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="3"></Col>
      </Row>
    </div>
  );
}

export default Main;
