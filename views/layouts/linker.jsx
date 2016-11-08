import React from 'react';
class Linker extends React.Component{
  render(){
    return(
      <link rel="stylesheet" href={this.props.urls}></link>
    )
  }
}
export default Linker;
