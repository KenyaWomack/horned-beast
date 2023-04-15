import { Component} from 'react';
 import Card from 'react-bootstrap/Card';
 class HornedBeast extends Component {
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

       <Card className='mx-2 my-2'
       style={{width:'20rem' }}
       bg='dark'
       text='light'
       onClick={this.addClick}
       >
         <Card.Img variant='top' src={this.props.beast.image_url} />
        <Card.Body>
          <Card.Title>
          {this.props.beast.title}
          </Card.Title>
        </Card.Body>
        <Card.Text>
        {this.props.beast.description}
        </Card.Text>
        <Card.Text>
        &hearts; {this.state.likes}
        </Card.Text>
       </Card>
     )
   }
 }
 export default HornedBeast;