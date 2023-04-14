import React from 'react';
import HornedBeast from './hornedbeast';
import list from './data.json';
import Results from './Results';
import SelectedBeast from './Selectedbeast';
import Form from 'react-bootstrap/Form';
import '../main.css';

 class Main extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
      //  currentBeast: {image_url: null},
      currentBeast:{}, 
       HornedBeast: list, 
       showModal: false
     }
   }

  //  handleOpenModal() {
  //   this.setState({showModal: true});
  //  }
handleCloseModal=()=>{this.setState({showModal: false});}

   selectCurrentBeast = (beast) => {
     this.setState({ currentBeast: beast, showModal: true });
   }
     render() {
      console.log (this.state.currentBeast)
      return (
        <div className ='container'>
        <Form>
         <Form.Group controlId="formHornFilter">
           <br></br>
           <Form.Label><h2>Filter By Number of Horns</h2></Form.Label>
           <Form.Control as="select" value={this.state.filter} onChange={this.handleFilterChange}>
             <option value="all">All</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="100">100</option>
           </Form.Control>
         </Form.Group>
       </Form>
       
        <SelectedBeast 
        currentBeast={this.state.currentBeast} 
        selectCurrentBeast={this.selectCurrentBeast} 
        showModal={this.state.showModal}
        handleClose={this.handleCloseModal}
        />
        <div className='beast-container'>
        
        {this.state.HornedBeast.map((beast,i)=><HornedBeast key={i} beast={beast} selectCurrentBeast={this.selectCurrentBeast}/>)}
        
        </div>
         
         <Results currentBeast={this.state.currentBeast}/>
        
         </div>
         )
       }
   }
   export default Main