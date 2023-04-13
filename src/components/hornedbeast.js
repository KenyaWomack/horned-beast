import React from 'react';
 import Image from 'react-bootstrap/Image';
 class HornedBeast extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       likes: 0
     }
   }
   addClick = () => {
    console.log (this.props.beast.title);
     this.setState({
       likes: this.state.likes + 1
     })
     this.props.selectCurrentBeast(this.props.beast);
   }
   render() {
    // console.log (this.props.beast.title);
    // console.log (this.props.beast.image_url);
    // console.log (this.props.beast.description);
     return (

       <div>
      <h2>{this.props.beast.title}</h2>
         <Image width="200px" src={this.props.beast.image_url} onClick={this.addClick} />
         <h3>{this.props.beast.description}</h3>
         <p>&hearts; {this.state.likes} </p>
       </div>
     )
   }
 }
 export default HornedBeast;