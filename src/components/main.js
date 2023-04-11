import { Component } from 'react';
 import HornedBeast from './hornedbeast';
 import list from './data.json';
 import Results from './Results';

 class Main extends Component{
   constructor () {
     super();
     this.state = {
       currentBeast: {image_url: null},
       HornedBeast: list,
     }
   }
   selectCurrentBeast = (beast) => {
     this.setState({ currentBeast: beast});
   }
     render() {
       return (
         <>
         <Results currentBeast={this.state.currentBeast}/>
         {this.state.HornedBeast.map((beast,i)=><HornedBeast key={i} beast={beast} />)}
         </>
         )
       }
   }
   export default Main