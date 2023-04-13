import React from 'react';
 import Card from 'react-bootstrap/Card';

 class Results extends React.Component {

   render() {
    console.log(this.props.currentBeast);
     return (
       <Card>
         <Card.Img variant="top" src={this.props.currentBeast} />
       </Card>
     )
   }
 }

 export default Results;