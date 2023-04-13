import React from 'react';
import HornedBeast from './hornedbeast';
import list from './data.json';
import Results from './Results';
import SelectedBeast from './Selectedbeast';

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
        <>
        <SelectedBeast 
        currentBeast={this.state.currentBeast} 
        selectCurrentBeast={this.selectCurrentBeast} 
        showModal={this.state.showModal}
        handleClose={this.handleCloseModal}
        />
         {this.state.HornedBeast.map((beast,i)=><HornedBeast key={i} beast={beast} selectCurrentBeast={this.selectCurrentBeast}/>)}
         <Results currentBeast={this.state.currentBeast}/>
        

         </>
         )
       }
   }
   export default Main