import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./NewCard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export class NewCard extends Component {
  render() {
    let { cardData } = this.props;
    return (
      <>
        <Card style={{ width: "18rem" }}>

          {/*if (cardData.picture==null){
           <Card.Img
           variant="top"
           src= {cardData.picture}/>//take default picture
        
         }else{
              <Card.Img
                variant="top"
                src= {cardData.picture}/>
              };*/}
          <Card.Img
            variant="top"
            src={cardData.picture} onError={(e) => { e.target.onerror = null; e.target.src = "https://storage.googleapis.com/snl-no-media/media/144223/standard_sosialdemokrati.jpg" }} />
          <Card.Body>
            <div class="container">
              <div class="row">
                <div class="col">
                  <p id="lector"> {/*{cardData.lecturer}*/} Erika Gubrium</p>
                </div>
                <div class="col">
                  <p id="time"> {/*{cardData.duration}*/} 60 </p>
                </div>
              </div>
            </div>

            <Card.Text>{cardData.title}</Card.Text>
            <div className="container-button">
              <Button>
                <Link variant="primary btn-lg" to={`/modules/${cardData.moduleID}`}>
                  Learn more
                </Link>
              </Button>
            </div>
          </Card.Body>


        </Card>
      </>
    );


  }
}
