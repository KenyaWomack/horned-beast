// import './App.css';
import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render(){
    return (
      <div>
      <Header></Header>
      <Main></Main>
     <Footer></Footer>
    </div>
  );
}
}
export default App;