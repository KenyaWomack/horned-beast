import React from 'react';
 import Card from 'react-bootstrap/Card';

 class Results extends React.Component {

   render() {
    console.log(this.props.currentBeast);
     return (
       <Card style={{width:'20rem' }}>
         <Card.Img variant="top" src={this.props.currentBeast.image_url} />
        <Card.Body>
          <Card.Title>
          {this.props.currentBeast.title}
          </Card.Title>
        </Card.Body>
        <Card.Text>
        {this.props.currentBeast.description}
        </Card.Text>
       </Card>
     )
   }
 }

 export default Results;