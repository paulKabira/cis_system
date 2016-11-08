import React from 'react';
import ReactDOM from 'react-dom';
import Foot from './layouts/footer.jsx';
import DefaultLayout from './layouts/default.jsx';

class Index extends React.Component{
  render(){
    return(
      <DefaultLayout title={this.props.title}>
        <div style={{borderStyle:'solid'}}>
        <h1>Hello my bro {this.props.rester}</h1>
        <Foot />
        </div>
      </DefaultLayout>
    );
  }
}
export default Index;
