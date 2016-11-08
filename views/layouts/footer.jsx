import React from 'react';
class Foot extends React.Component{
  render(){
    return(
    <div className="header footer">
      <ul>
        <li><a href="aboutus">About US{this.props.to}</a></li>
      </ul>
    </div>
  );
}
}
export default Foot;
