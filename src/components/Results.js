import React from 'react';
 import Card from 'react-bootstrap/Card';

 class Results extends React.Component {

   render() {
    console.log(this.props.currentBeast);
     return (
       <Card>
         <Card.Img variant="top" src={this.props.currentBeast.image_url} />
       </Card>
     )
   }
 }

 export default Results;